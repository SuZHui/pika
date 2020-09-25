import axiosAdaptor from '../adaptor/axios'
/**
 * copy from axios AxiosRequestConfig.Method
 */
type HttpRequestMethod = 
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

type HttpResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'

type FixedPikaConfig = {
  baseURL: string
  url: string
  headers: any
  data: any
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  timeout: number
  method: HttpRequestMethod
  responseType: HttpResponseType
}

const getDefaultConfig = () => ({
  baseURL: null,
  url: null,
  headers: null,
  data: null,
  // get 请求附带的参数
  params: null,
  timeout: 0,
  // `method` 是创建请求时使用的方法 默认是get
  method: 'get',
  // `responseType` 表示服务器响应的数据类型 默认是josn
  responseType: 'json'
})

export type PikaConfig = Partial<FixedPikaConfig>

export interface AdaptorDispatch<T extends {}>{
  (cfg: PikaConfig): Promise<T>
}

export function request<T>(config: PikaConfig, adaptor: AdaptorDispatch<T>) {
  const combinedConfig = Object.assign({}, getDefaultConfig(), config)
  return adaptor(combinedConfig)
}

export class Pika {
  private config: PikaConfig
  private requestDispatch: AdaptorDispatch<any>

  /**
   * 构造Pika实例
   * @param config 
   * @param adaptorFun 配置第三方请求组件 默认为axios
   */
  constructor (config: PikaConfig = {}, adaptorFun: AdaptorDispatch<any> = axiosAdaptor) {
    this.config = Object.assign(getDefaultConfig(), config)
    this.requestDispatch = adaptorFun
  }

  /**
   * 发起请求
   * @param config
   */
  public request<T extends unknown>(config: PikaConfig = {}): Promise<T> {
    const combinedConfig = Object.assign({}, this.config, config)
    return request<T>(combinedConfig, this.requestDispatch)
  }

  public post<T> (url: string, data: T, config: PikaConfig = {}): Promise<T> {
    const combinedConfig = Object.assign(config, { url, data, method: 'POST' })
    return this.request(combinedConfig)
  }

  public get<T> (url: string, params: any, config: PikaConfig = {}): Promise<T> {
    const combinedConfig = Object.assign(config, { url, method: 'GET', params: params || {} })
    return this.request(combinedConfig)
  }
}
