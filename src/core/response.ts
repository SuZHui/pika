import { HttpHeaders } from './headers'

export enum HttpEventType {
  // 请求发送中
  Sent,
  // 上传进度
  UploadProgress,
  // 接收到响应头
  ResponseHeader,
  // 下载事件
  DownloadProgress,
  // 接收完整响应事件
  Response,
  // 拦截器或服务端返回的自定义事件
  User,
}

export interface HttpProgressEvent {
  // 上传或下载的事件类型
  type: HttpEventType.DownloadProgress|HttpEventType.UploadProgress
  // 已上传或已下载的内容大侠(单位bytes)
  loaded: number
  // 需要上传或下载的总大小（单位bytes）
  // 这个值取决于服务端返回， 可能为null
  total?: number
}

export interface HttpDownloadProgressEvent extends HttpProgressEvent {
  type: HttpEventType.DownloadProgress;

  /**
   * The partial response body as downloaded so far.
   *
   * Only present if the responseType was `text`.
   */
  partialText?: string
}

export interface HttpUploadProgressEvent extends HttpProgressEvent {
  type: HttpEventType.UploadProgress
}

export interface HttpSentEvent {
  type: HttpEventType.Sent
}

/**
 * 用户自定义回调事件
 */
export interface HttpUserEvent {
  type: HttpEventType.User
}

/**
 * json解析错误接口
 */
export interface HttpJsonParseError {
  error: Error
  text: string
}

/**
 * `HttpResponse` 和 `HttpHeaderResponse`的基类
 */
export abstract class HttpResponseBase {
  // 响应头
  readonly headers: HttpHeaders
  // 响应状态码
  readonly status: number
  // 状态文字
  readonly statusText: string
  // URL地址，可能为null
  readonly url: string|null
  // `status`是否在2xx范围内
  readonly ok: boolean
  // 响应类型 （完整响应或只有响应头）
  readonly type!: HttpEventType.Response|HttpEventType.ResponseHeader

  /**
   *  所有响应的构造函数
   */
  constructor (
    init: {
      headers?: HttpHeaders,
      status?: number,
      statusText?: string,
      url?: string
    },
    defaultStatus = 200, defaultStatusText = 'OK') {
    this.headers = init.headers || new HttpHeaders()
    this.status = init.status !== undefined ? init.status : defaultStatus
    this.statusText = init.statusText || defaultStatusText
    this.url = init.url || null

    this.ok = this.status >= 200 && this.status < 300
  }
}

export class HttpHeaderResponse extends HttpResponseBase {
  constructor (init: {
    headers?: HttpHeaders,
    status?: number,
    statusText?: string,
    url?: string
  } = {}) {
    super(init)
  }

  readonly type: HttpEventType.ResponseHeader = HttpEventType.ResponseHeader

  clone (update: { headers?: HttpHeaders, status?: number, statusText?: string, url?: string } = {})
  : HttpHeaderResponse {
    return new HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    })
  }
}

export class HttpResponse<T> extends HttpResponseBase {
  // 响应体
  readonly body: T|null

  constructor(init: {
    body?: T|null,
    headers?: HttpHeaders,
    status?: number,
    statusText?: string,
    url?: string
  } = {}) {
    super(init)
    this.body = init.body !== undefined ? init.body : null
  }

  readonly type: HttpEventType.Response = HttpEventType.Response

  clone():
      HttpResponse<T>
  clone(update: { headers?: HttpHeaders, status?: number, statusText?: string, url?: string }):
      HttpResponse<T>
  clone<V>(update: {
    body?: V|null,
    headers?: HttpHeaders,
    status?: number,
    statusText?: string,
    url?: string
  }): HttpResponse<V>
  clone (update: {
    body?: unknown|null,
    headers?: HttpHeaders,
    status?: number,
    statusText?: string,
    url?: string
  } = {}): HttpResponse<unknown> {
    return new HttpResponse<unknown>({
      body: (update.body !== undefined) ? update.body : this.body,
      headers: update.headers || this.headers,
      status: (update.status !== undefined) ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    })
  }
}

export type HttpEvent<T> =
  HttpSentEvent|HttpHeaderResponse|HttpResponse<T>|HttpProgressEvent|HttpUserEvent

export class HttpErrorResponse extends HttpResponseBase implements Error {
  readonly name: string = 'HttpErrorResponse'
  readonly message: string
  readonly error?: any|null

  constructor (init: {
    error?: any,
    headers?: HttpHeaders,
    status?: number,
    statusText?: string,
    url?: string
  }) {
    super(init, 0, 'Unknown Error')

    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`
    } else {
      this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`
    }
    this.error = init.error || null
  }
}
