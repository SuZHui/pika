import { Observable } from 'rxjs/internal/Observable'
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

  addInterceptor (interceptor: HttpInterceptor): number {
    this.interceptors.push(interceptor)
    return this.interceptors.length - 1
  }

  removeInterceptor (id: number) {
    this.interceptors.splice(id, 1)
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

export class Xylitol extends HttpClient {
  constructor (handler: HttpInterceptingHandler) {
    super(handler)
  }

  addInterceptor (interceptor: HttpInterceptor): number {
    const handler = this.handler as HttpInterceptingHandler
    return handler.addInterceptor(interceptor)
  }

  removeInterceptor (id: number): void {
    const handler = this.handler as HttpInterceptingHandler
    handler.removeInterceptor(id)
  }

  static create (): Xylitol {
    const xhrFactory = new BrowserXhr()
    const backend = new HttpXhrBackend(xhrFactory)
    // 融合拦截器
    const httpInterceptingHandler = new HttpInterceptingHandler(backend, [])
    // 拦截器接入
    return new Xylitol(httpInterceptingHandler)
  }

  static factory(): XylitolFactory {
    const interceptors: HttpInterceptor[] = []

    const methods = {
      addInterceptors (interceptors: HttpInterceptor[]) {
        interceptors.push(...interceptors)
        return methods
      },
      create () {
        const xhrFactory = new BrowserXhr()
        const backend = new HttpXhrBackend(xhrFactory)
        // 融合拦截器
        const httpInterceptingHandler = new HttpInterceptingHandler(backend, interceptors)
        // 拦截器接入
        return new Xylitol(httpInterceptingHandler)
      }
    }
    return methods
  }
}

type XylitolFactory = {
  addInterceptors: (i:HttpInterceptor[]) => XylitolFactory,
  create: () => Xylitol
}

// export class Xylitol {
//   private interceptors: HttpInterceptor[] = []

//   useInterceptors (interceptors: HttpInterceptor[] = []): Xylitol {
//     this.interceptors = this.interceptors.concat(interceptors)
//     return this
//   }

//   create (): HttpClient {
//     const xhrFactory = new BrowserXhr()
//     const backend = new HttpXhrBackend(xhrFactory)
//     // 融合拦截器
//     const httpInterceptingHandler = new HttpInterceptingHandler(backend, this.interceptors)
//     // 拦截器接入
//     return new HttpClient(httpInterceptingHandler)
//   }
// }
