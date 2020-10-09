/* eslint-disable @typescript-eslint/ban-types */
import { Observable } from 'rxjs/internal/Observable'
import { of } from 'rxjs'
import { concatMap, filter, map } from 'rxjs/operators'

import { HttpParamsOptions } from './params'
import { HttpEvent, HttpResponse } from './response'
import { HttpRequest } from './request'
import { HttpHandler } from './backend'
import { HttpHeaders } from './headers'
import { HttpParams } from './params'

export type HttpObserve = 'body'|'events'|'response'

function addBody<T> (
  options: {
    headers?: HttpHeaders|{[header: string]: string|string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string|string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean
  },
  body: T|null): any {
  return {
    body,
    headers: options.headers,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials
  }
}

export class HttpClient {
  constructor (private readonly handler: HttpHandler) {}

  // 发送``HttpRequest`并返回一个`HttpEvents`流
  request<R>(req: HttpRequest<any>): Observable<HttpEvent<R>>
  // 根据参数构造一个`HttpRequest`并返回`ArrayBuffer`流
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean
  }): Observable<ArrayBuffer>
  // 根据参数构造一个`HttpRequest`并返回`Blob`流
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<Blob>
  // 据参数构造一个`HttpRequest`并返回字符串流
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<string>
  // 据参数构造一个`HttpRequest`并返回`HttpEvents`流
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]}, observe: 'events',
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpEvent<ArrayBuffer>>
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Blob>>
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpEvent<string>>
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    reportProgress?: boolean, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<any>>
  request<R>(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    reportProgress?: boolean, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<R>>
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpResponse<ArrayBuffer>>
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Blob>>
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpResponse<string>>
  request(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    reportProgress?: boolean, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Object>>
  request<R>(method: string, url: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    reportProgress?: boolean, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<R>>
  request(method: string, url: string, options?: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    responseType?: 'json',
    reportProgress?: boolean,
    withCredentials?: boolean,
  }): Observable<Object>
  request<R>(method: string, url: string, options?: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    responseType?: 'json',
    reportProgress?: boolean,
    withCredentials?: boolean,
  }): Observable<R>
  request(method: string, url: string, options?: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    observe?: HttpObserve,
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }): Observable<any>
  request(first: string|HttpRequest<any>, url?: string, options: {
    body?: any,
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    let req: HttpRequest<any>
    if (first instanceof HttpRequest) {
      req = first
    } else {
      let headers: HttpHeaders|undefined = undefined
      if (options.headers instanceof HttpHeaders) {
        headers = options.headers
      } else {
        headers = new HttpHeaders(options.headers)
      }

      let params: HttpParams|undefined = undefined
      if (options.params) {
        if (options.params instanceof HttpParams) {
          params = options.params
        } else {
          params = new HttpParams({ fromObject: options.params } as HttpParamsOptions)
        }
      }

      req = new HttpRequest(first, url!, (options.body !== undefined ? options.body : null), {
        headers,
        params,
        reportProgress: options.reportProgress,
        responseType: options.responseType || 'json',
        withCredentials: options.withCredentials
      })
    }

    const events$: Observable<HttpEvent<any>> =
      of(req).pipe(concatMap((req: HttpRequest<any>) => this.handler.handle(req)))

    if (first instanceof HttpRequest || options.observe === 'events') {
      return events$
    }

    const res$: Observable<HttpResponse<any>> = <Observable<HttpResponse<any>>>events$.pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse))
    
    // 判断返回流的类型
    switch (options.observe || 'body') {
      case 'body':
        switch (req.responseType) {
          case 'arraybuffer':
            return res$.pipe(map((res: HttpResponse<any>) => {
              if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                throw new Error('Response is not an ArrayBuffer.')
              }
              return res.body
            }))
          case 'blob':
            return res$.pipe(map((res: HttpResponse<any>) => {
              if (res.body !== null && !(res.body instanceof Blob)) {
                throw new Error('Response is not a Blob.')
              }
              return res.body
            }))
          case 'text':
            return res$.pipe(map((res: HttpResponse<any>) => {
              if (res.body !== null && typeof res.body !== 'string') {
                throw new Error('Response is not a string.')
              }
              return res.body
            }))
          case 'json':
          default:
            return res$.pipe(map((res: HttpResponse<any>) => res.body))
        }
      case 'response':
        return res$
      default:
        throw new Error(`Unreachable: unhandled observe type ${options.observe}}`)
    }
  }

  delete (url: string, options: {
    headers?: HttpHeaders|{[header: string]: string|string[]},
    observe?: 'body',
    params?: HttpParams|{[param:string]: string|string[]},
    reportProgress?: boolean,
    responseType: 'arraybuffer',
    withCredentials?: boolean
  }): Observable<ArrayBuffer>
  delete (url: string, options: {
    headers?: HttpHeaders|{[header: string]: string|string[]},
    observe?: 'body',
    params?: HttpParams|{[param:string]: string|string[]},
    reportProgress?: boolean,
    responseType: 'blob',
    withCredentials?: boolean
  }): Observable<Blob>
  delete (url: string, options: {
    headers?: HttpHeaders|{[header: string]: string|string[]},
    observe?: 'body',
    params?: HttpParams|{[param:string]: string|string[]},
    reportProgress?: boolean,
    responseType: 'text',
    withCredentials?: boolean
  }): Observable<string>
  delete (url: string, options: {
    headers?: HttpHeaders|{[header: string]: string|string[]},
    observe?: 'events',
    params?: HttpParams|{[param:string]: string|string[]},
    reportProgress?: boolean,
    responseType: 'arraybuffer',
    withCredentials?: boolean
  }): Observable<HttpEvent<ArrayBuffer>>
  delete(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Blob>>
  delete(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpEvent<string>>
  delete(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Object>>
  delete<T>(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<T>>
  delete(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpResponse<ArrayBuffer>>
  delete(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Blob>>
  delete(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpResponse<string>>
  delete(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Object>>
  delete<T>(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<T>>
  delete(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<Object>
  delete<T>(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<T>
  delete(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    return this.request<any>('DELETE', url, options as any)
  }

  get (url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType: 'arraybuffer',
    withCredentials?: boolean
  }): Observable<ArrayBuffer>
  get (url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType: 'blob',
    withCredentials?: boolean
  }): Observable<Blob>
  get (url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType: 'text',
    withCredentials?: boolean
  }): Observable<string>
  get (url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpEvent<ArrayBuffer>>
  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Blob>>
  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpEvent<string>>
  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Object>>
  get<T>(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<T>>
  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpResponse<ArrayBuffer>>
  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Blob>>
  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpResponse<string>>
  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Object>>
  get<T>(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<T>>
  get(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<Object>
  get<T>(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<T>
  get(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    return this.request<any>('GET', url, options as any)
  }

  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<ArrayBuffer>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<Blob>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<string>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpEvent<ArrayBuffer>>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Blob>>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpEvent<string>>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Object>>
  head<T>(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<T>>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpResponse<ArrayBuffer>>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Blob>>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpResponse<string>>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Object>>
  head<T>(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<T>>
  head(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<Object>
  head<T>(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<T>
  head(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    return this.request<any>('HEAD', url, options as any)
  }

  jsonp(url: string, callbackParam: string): Observable<Object>
  jsonp<T>(url: string, callbackParam: string): Observable<T>
  jsonp<T>(url: string, callbackParam: string): Observable<T> {
    return this.request<any>('JSONP', url, {
      params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
      observe: 'body',
      responseType: 'json',
    })
  }

  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<ArrayBuffer>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<Blob>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<string>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpEvent<ArrayBuffer>>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Blob>>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpEvent<string>>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Object>>
  options<T>(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<T>>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpResponse<ArrayBuffer>>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Blob>>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpResponse<string>>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Object>>
  options<T>(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<T>>
  options(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<Object>
  options<T>(url: string, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<T>
  options(url: string, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    return this.request<any>('OPTIONS', url, options as any)
  }

  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<ArrayBuffer>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<Blob>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<string>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpEvent<ArrayBuffer>>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Blob>>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpEvent<string>>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Object>>
  patch<T>(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<T>>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpResponse<ArrayBuffer>>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Blob>>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpResponse<string>>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Object>>
  patch<T>(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<T>>
  patch(url: string, body: any|null, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<Object>
  patch<T>(url: string, body: any|null, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<T>
  patch(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    return this.request<any>('PATCH', url, addBody(options, body))
  }

  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<ArrayBuffer>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<Blob>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<string>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpEvent<ArrayBuffer>>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Blob>>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpEvent<string>>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Object>>
  post<T>(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<T>>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpResponse<ArrayBuffer>>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Blob>>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpResponse<string>>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Object>>
  post<T>(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<T>>
  post(url: string, body: any|null, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<Object>
  post<T>(url: string, body: any|null, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<T>
  post(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    return this.request<any>('POST', url, addBody(options, body))
  }

  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<ArrayBuffer>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<Blob>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<string>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpEvent<ArrayBuffer>>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Blob>>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpEvent<string>>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<Object>>
  put<T>(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'events',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpEvent<T>>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'arraybuffer',
    withCredentials?: boolean,
  }): Observable<HttpResponse<ArrayBuffer>>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'blob',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Blob>>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean, responseType: 'text',
    withCredentials?: boolean,
  }): Observable<HttpResponse<string>>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<Object>>
  put<T>(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]}, observe: 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<HttpResponse<T>>
  put(url: string, body: any|null, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<Object>
  put<T>(url: string, body: any|null, options?: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }): Observable<T>
  put(url: string, body: any|null, options: {
    headers?: HttpHeaders|{[header: string]: string | string[]},
    observe?: HttpObserve,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    return this.request<any>('PUT', url, addBody(options, body))
  }
}
