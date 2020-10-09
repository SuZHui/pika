import { Observable } from 'rxjs/internal/Observable'

import { HttpEvent } from './response'
import { HttpHandler } from './backend'
import { HttpRequest } from './request'

export interface HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
}

export class HttpInterceptorHandler implements HttpHandler {
  constructor (private next: HttpHandler, private interceptor: HttpInterceptor) {}

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.interceptor.intercept(req, this.next)
  }
}
