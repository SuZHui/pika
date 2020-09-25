import { HttpHeaders } from './headers'
import { HttpParams } from './params'

interface HttpRequestInit {
  headers?: HttpHeaders
  reportProgress?: boolean
  params?: HttpParams
  responseType?: 'arraybuffer'|'blob'|'json'|'text'
  withCredentials?: boolean
}

type HttpMethod =
| 'get' | 'GET'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'

/**
 * 验证提供的`method`是否可以包含body
 * @param method
 */
function mightHavBody (method: string): boolean {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false
    default:
      return true
  }
}

/**
 * 验证当前环境是否可以使用ArrayBuffer对象 且参数也是一个ArrayBuffer类型的对象
 * @param value
 */
function isArrayBuffer (value: any): value is ArrayBuffer {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer
}

/**
 * 验证当前环境是否可以使用Blob对象 且参数也是一个Blob类型的对象
 * @param value
 */
function isBlob (value: any): value is Blob {
  return typeof Blob !== 'undefined' && value instanceof Blob
}

/**
 * 验证当前环境是否可以使用FormData对象 且参数也是一个FormData类型的对象
 * @param value
 */
function isFormData (value: any): value is FormData {
  return typeof FormData !== 'undefined' && value instanceof FormData
}

export class HttpRequest<T> {
  readonly body: T | null = null

  readonly headers!: HttpHeaders

  readonly reportProgress: boolean = false

  readonly responseType: 'arraybuffer'|'blob'|'json'|'text' = 'json'

  readonly method: string

  readonly params!: HttpParams

  readonly urlWithParams: string

  constructor (method: HttpMethod, readonly url: string, init?: {
    headers?: HttpHeaders,
    reportProgress: boolean,
    params?: HttpParams,
    responseType: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean
  }) {}
}
