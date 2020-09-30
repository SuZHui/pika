import { Observable, Observer } from 'rxjs'
import { HttpBackend } from './backend'
import { HttpHeaders } from './headers'
import { HttpRequest } from './request'
import { HttpDownloadProgressEvent, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaderResponse, HttpJsonParseError, HttpResponse, HttpUploadProgressEvent } from './response'

const XSSI_PREFIX = /^\)\]\}',?\n/

function getResponseUrl(xhr: XMLHttpRequest): string|null {
  if ('responseURL' in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }
  return null;
}

export abstract class XhrFactory {
  abstract build(): XMLHttpRequest;
}

export class BrowserXhr implements XhrFactory {
  build(): any {
    return <any>(new XMLHttpRequest())
  }
}

// interface PartialResponse {
//   headers: HttpHeaders;
//   status: number;
//   statusText: string;
//   url: string;
// }

export class HttpXhrBackend implements HttpBackend {
  constructor (private xhrFactory: XhrFactory) {}

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (req.method === 'JSONP') {
      throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`)
    }
    return new Observable((observer: Observer<HttpEvent<any>>) => {
      const xhr = this.xhrFactory.build()
      xhr.open(req.method, req.urlWithParams)
      if (req.withCredentials) {
        xhr.withCredentials = true
      }

      req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')))
      if (!req.headers.has('Accept')) {
        xhr.setRequestHeader('Accept', 'application/json, text/plain, */*')
      }

      if (!req.headers.has('Content-Type')) {
        const detectedType = req.detectContentTypeHeader()
        if (detectedType !== null) {
          xhr.setRequestHeader('Content-Type', detectedType)
        }
      }

      if (req.responseType) {
        const responseType = req.responseType.toLowerCase()
        xhr.responseType = ((responseType !== 'json') ? responseType : 'text') as any
      }

      const reqBody = req.serializeBody()
      let headerResponse: HttpHeaderResponse|null = null

      const partialFromXhr = (): HttpHeaderResponse => {
        if (headerResponse !== null) {
          return headerResponse
        }

        // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
        const status: number = xhr.status === 1223 ? 204 : xhr.status
        const statusText = xhr.statusText || 'OK'

        // Parse headers from XMLHttpRequest - this step is lazy.
        const headers = new HttpHeaders(xhr.getAllResponseHeaders())

        // 获取响应的url，如果不存在则使用请求体的url
        const url = getResponseUrl(xhr) || req.url

        // 缓存 `HttpHeaderResponse`
        headerResponse = new HttpHeaderResponse({ headers, status, statusText, url })
        return headerResponse
      }

      const onLoad = () => {
        const { headers, statusText, url } = partialFromXhr()
        let { status } = partialFromXhr()
        let body: any|null = null

        if (status !== 204) {
          body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response
        }

        if (status === 0) {
          status = body ? 200 : 0
        }

        let ok = status >= 200 && status < 300

        if (req.responseType === 'json' && typeof body === 'string') {
          // 移除XSSI前缀 并保存其它响应体内容
          const originalBody = body;
          body = body.replace(XSSI_PREFIX, '')
          try {
            // 解析响应体
            body = body !== '' ? JSON.parse(body) : null
          } catch (error) {
            // 如果解析json失败 则认定当前内容不为json 则返回原始响应体
            body = originalBody

            // 如果ok为true， 则需要将其转为false 表示单次请求失败
            if (ok) {
              // 即使响应码为2xx, 仍然判定当前响应为错误
              ok = false
              // 设置响应体为 `HttpJsonParseError` 同时返回错误对象和源响应体
              body = { error, text: body } as HttpJsonParseError
            }
          }
        }

        // 根据前面的ok状态设置oberver的对应返回体
        if (ok) {
          // 成功的响应
          observer.next(new HttpResponse({
            body,
            headers,
            status,
            statusText,
            url: url || undefined
          }))
          // 请求完成
          observer.complete()
        } else {
          // 服务器层面的错误
          observer.error(new HttpErrorResponse({
            error: body,
            headers,
            status,
            statusText,
            url: url || undefined
          }))
        }
      }

      // 错误的callback函数，拦截网络层面的错误
      // 超时，DNS错误，离线等
      const onError = (error: ProgressEvent) => {
        const { url } = partialFromXhr();
        const res = new HttpErrorResponse({
          error,
          status: xhr.status || 0,
          statusText: xhr.statusText || 'Unknown Error',
          url: url || undefined
        })
        observer.error(res)
      }

      let sentHeaders = false
      const onDownProgress = (event: ProgressEvent) => {
        // 如果还没有发送HttpResponseHeaders事件，则发送它.
        if (!sentHeaders) {
          observer.next(partialFromXhr())
          sentHeaders = true
        }

        // 构建下载进度事件
        const progressEvent: HttpDownloadProgressEvent = {
          type: HttpEventType.DownloadProgress,
          loaded: event.loaded,
        }

        // 如果bytes总数已知，则设置为progress事件的total
        if (event.lengthComputable) {
          progressEvent.total = event.total;
        }

        // 如果响应类型为 text 则将当前响应的`responseText`插入事件的进度内容中
        if (req.responseType === 'text' && !!xhr.responseText) {
          progressEvent.partialText = xhr.responseText
        }

        // 触发observer
        observer.next(progressEvent)
      }

      const onUpProgress = (event: ProgressEvent) => {
        const progress: HttpUploadProgressEvent = {
          type: HttpEventType.UploadProgress,
          loaded: event.loaded
        }

        // 如果bytes总数已知，则设置为progress事件的total
        if (event.lengthComputable) {
          progress.total = event.total;
        }

        // 触发observer
        observer.next(progress)
      }

      // 默认情况 只注册load 和 error事件
      xhr.addEventListener('load', onLoad)
      xhr.addEventListener('error', onError)

      // 开启进度事件监听
      if (req.reportProgress) {
        // 下载进度开启
        xhr.addEventListener('progress', onDownProgress)

        // 如果有上传实体 则响应上传事件
        if (reqBody !== null && xhr.upload) {
          xhr.upload.addEventListener('progress', onUpProgress)
        }
      }

      // 发起请求 同时触发观察者的Send事件流
      xhr.send(reqBody)
      observer.next({ type: HttpEventType.Sent })

      // 在Observable回调中返回一个cancellation handler 用于中断请求
      return () => {
        // 在取消时，删除所有已注册的事件侦听器
        xhr.removeEventListener('error', onError)
        xhr.removeEventListener('load', onLoad)
        if (req.reportProgress) {
          xhr.removeEventListener('progress', onDownProgress)
          if (reqBody !== null && xhr.upload) {
            xhr.removeEventListener('progress', onUpProgress)
          }
        }

        // 如果中断请求时，xhr的发送状态还未完成 则终端之
        if (xhr.readyState !== xhr.DONE) {
          xhr.abort()
        }
      }
    })
  }
}
