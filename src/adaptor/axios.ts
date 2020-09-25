import Axios, { AxiosInstance } from 'axios'
import { PikaConfig } from '../core/Pika'

export function axiosAdaptor (config: PikaConfig) {
  return new Promise((resolve, reject) => {
    return Axios.request(config)
      .then(resolve)
      .catch(reject)
  })
}

type InterceptorHandler = ()

export interface HttpClientWrapper<T> {
  getInstance: () => T
  request: (config: PikaConfig) => Promise<any>
  setInterceptor: (handler: InterceptorHandler) => void
}

export default class AxiosWrapper implements HttpClientWrapper<AxiosInstance> {
  private instance

  constructor (config: PikaConfig) {
    this.instance = Axios.create(config)
  }

  public getInstance () {
    return this.instance
  }

  public request (config: PikaConfig) {
    return new Promise((resolve, reject) => {
      this.instance.request(config)
        .then(resolve)
        .catch(reject)
    })
  }

  public setInterceptor: (handler: any) => any
}