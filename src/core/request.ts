import { HttpHeaders } from './headers'
import { HttpParams } from './params'

interface HttpRequestInit {
  headers?: HttpHeaders
  reportProgress?: boolean
  params?: HttpParams
  responseType?: 'arraybuffer'|'blob'|'json'|'text'
  withCredentials?: boolean
}

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

/**
 * 请求实体 包含http请求携带的所有参数
 */
export class HttpRequest<T> {
  /**
   * 请求体 或 null
   */
  readonly body: T | null = null

  readonly headers!: HttpHeaders

  readonly reportProgress: boolean = false

  readonly responseType: 'arraybuffer'|'blob'|'json'|'text' = 'json'

  readonly method: string

  readonly params!: HttpParams

  /**
   * 请求是否携带cookie
   */
  readonly urlWithParams: string

  readonly withCredentials: boolean = false

  constructor (method: 'DELETE'|'GET'|'HEAD'|'JSONP'|'OPTIONS', url: string, init?: {
    headers?: HttpHeaders,
    reportProgress?: boolean,
    params?: HttpParams,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean
  })
  constructor (method: 'POST'|'PUT'|'PATCH', url: string, body: T|null, init?: {
    headers?: HttpHeaders,
    reportProgress?: boolean,
    params?: HttpParams,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean
  })
  constructor (method: string, url: string, body: T|null, init?: {
    headers?: HttpHeaders,
    reportProgress?: boolean,
    params?: HttpParams,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean
  })
  constructor (
    method: string, readonly url: string, third?: T|{
      headers?: HttpHeaders,
      reportProgress?: boolean,
      params?: HttpParams,
      responseType?: 'arraybuffer'|'blob'|'json'|'text',
      withCredentials?: boolean
    }|null,
    fourth?: {
      headers?: HttpHeaders,
      reportProgress?: boolean,
      params?: HttpParams,
      responseType?: 'arraybuffer'|'blob'|'json'|'text',
      withCredentials?: boolean
    }) {
    this.method = method.toUpperCase()
    // 确定哪个参数持有`HttpRequestInit`的选项
    let options: HttpRequestInit|undefined

    // 查看当前请求body是否存在
    if (mightHavBody(this.method) || fourth) {
      // 第三个参数是body 第四个参数（如果存在）则为options
      this.body = (third !== undefined) ? third as T : null
      options = fourth
    } else {
      // 如果body为undefiend 则第三个参数为options body设置为null
      options = third as HttpRequestInit
    }
    
    // 如果options存在，则进行options的解析
    if (options) {
      this.reportProgress = !!options.reportProgress
      this.withCredentials = !!options.withCredentials

      // 如果`responseType`存在 则设置request的`responseType`
      if (options.responseType) {
        this.responseType = options.responseType
      }

      // 如果`headers`存在 则覆写之
      if (options.headers) {
        this.headers = options.headers
      }

      if (options.params) {
        this.params = options.params
      }
    }

    // 如果headers不存在，则构造一个新的`HttpHeaders`实例
    if (!this.headers) {
      this.headers = new HttpHeaders()
    }

    // `param`不存在则构造一个`HttpUrlEncodedParams`实例
    if (!this.params) {
      this.params = new HttpParams()
      this.urlWithParams = url
    } else {
      // 将参数对象编译为url参数字符串
      const params = this.params.toString()
      if (params.length === 0) {
        // 如果`params`的长度为0 则不
        this.urlWithParams = url
      } else {
        // 如果url中包含`query`内容（例如xxx?xxx）
        const qIdx = url.indexOf('?')
        // 会出现三种情况
        // 1） ?后没有参数 -> 直接在?后追加params对象的参数
        // 2） ?后面有`query`字符串 -> 在&后面继续追加params参数对象
        // 3) ?存在且在url末尾 -> 直接往后追加params对象的字符串内容
        const sep: string = qIdx === -1
          ? '?'
          : qIdx < url.length - 1
            ? '&'
            : ''
        this.urlWithParams = url + sep + params
      }
    }
  }

  /**
   * 将请求体进行序列变化
   */
  serializeBody (): ArrayBuffer|Blob|FormData|string|null {
    if (this.body === null) {
      return null
    }

    // body是否已经是序列化后的实例
    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
        typeof this.body === 'string') {
      return this.body
    }

    // body 是 `HttpUrlEncodedParams`的实例
    if (this.body instanceof HttpParams) {
      return this.body.toString()
    }

    // body是对象或数组 则直接使JSON的序列化方法
    if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
        Array.isArray(this.body)) {
      return JSON.stringify(this.body)
    }
    
    // 其它情况则返回对象的toString方法
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (this.body as any).toString()
  }

  /**
   * 推断body的 MIME type
   * 如股票没有可以推断的类型 则返回null
   */
  detectContentTypeHeader (): string|null {
    if (this.body === null) {
      return null
    }

    // 如果是`FormData`则不进行推断
    if (isFormData(this.body)) {
      return null
    }

    // blob通常有自己的内容类型。
    // 如果没有则返回null
    if (isBlob(this.body)) {
      return this.body.type || null
    }
    
    // `ArrayBuffer` 无法进行类型推断
    if (isArrayBuffer(this.body)) {
      return null
    }

    // 如果body为 sting 类型 则返回对应的 MIME type
    if (typeof this.body === 'string') {
      return 'text/plain'
    }

    // `HttpUrlEncodedParams`的content-type
    if (this.body instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8'
    }

    // array object number将被编码为JSON
    if (typeof this.body === 'object' || typeof this.body === 'number' ||
        Array.isArray(this.body)) {
      return 'application/json'
    }
    return null
  }

  clone(): HttpRequest<T>
  clone(update: {
    headers?: HttpHeaders,
    reportProgress?: boolean,
    params?: HttpParams,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
    body?: T|null,
    method?: string,
    url?: string,
    setHeaders?: {[name: string]: string|string[]},
    setParams?: {[param: string]: string}
  }): HttpRequest<T>
  clone<V>(update: {
    headers?: HttpHeaders,
    reportProgress?: boolean,
    params?: HttpParams,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
    body?: V|null,
    method?: string,
    url?: string,
    setHeaders?: {[name: string]: string|string[]},
    setParams?: {[param: string]: string}
  }): HttpRequest<V>
  clone(update: {
    headers?: HttpHeaders,
    reportProgress?: boolean,
    params?: HttpParams,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
    body?: any|null,
    method?: string,
    url?: string,
    setHeaders?: {[name: string]: string|string[]},
    setParams?: {[param: string]: string}
  } = {}): HttpRequest<any> {
    const method = update.method || this.method
    const url = update.url || this.url
    const responseType = update.responseType || this.responseType

    // 如果 update中的body不存在 意味则不进行body更新操作
    const body = (update.body !== undefined) ? update.body : this.body
    // 如果upodate中的withCredentials不存在 意味则不进行body更新操作
    const withCredentials =
      (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials
    const reportProgress =
      (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress
    
    let headers = update.headers || this.headers
    let params = update.params || this.params

    if (update.setHeaders !== undefined) {
      headers = 
        Object.keys(update.setHeaders)
          .reduce((headers, name) => headers.set(name, update.setHeaders![name]), headers)
    }

    if (update.setParams !== undefined) {
      params =
        Object.keys(update.setParams)
          .reduce((params, param) => params.set(param, update.setParams![param]), params)
    }

    return new HttpRequest(method, url, body, {
      params,
      headers,
      reportProgress,
      responseType,
      withCredentials
    })
  }
}
