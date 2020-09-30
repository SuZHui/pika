import { Observable } from 'rxjs'
import { BrowserXhr, HttpXhrBackend } from './xhr';
import { HttpClient } from './client';
import { HttpBackend, HttpHandler } from './backend'
import { HttpRequest } from './request'
import { HttpEvent } from './response'
import { HttpInterceptorHandler, HttpInterceptor } from './interceptor'

class HttpInterceptingHandler implements HttpHandler {
  private chain: HttpHandler|null = null
  
  constructor (private backend: HttpBackend, private interceptors: HttpInterceptor[] = []) {}

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (this.chain === null) {
      this.chain = this.interceptors.reduceRight(
          (next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
    }
    return this.chain.handle(req)
  }
}

// function interceptingHandler (
//   backend: HttpBackend,
//   interceptors: HttpInterceptor[]|null = []
// ): HttpHandler {
//   if (!interceptors) {
//     return backend
//   }
//   return interceptors.reduceRight(
//     (next, interceptor) => new HttpInterceptorHandler(next, interceptor),
//     backend
//   )
// }

export class Pika {
  private interceptors: HttpInterceptor[] = []

  useInterceptors (interceptors: HttpInterceptor[] = []): Pika {
    this.interceptors = this.interceptors.concat(interceptors)
    return this
  }

  create (): HttpClient {
    const xhrFactory = new BrowserXhr()
    const backend = new HttpXhrBackend(xhrFactory)
    // 融合拦截器
    const httpInterceptingHandler = new HttpInterceptingHandler(backend, this.interceptors)
    // 拦截器接入
    return new HttpClient(httpInterceptingHandler)
  }
}
