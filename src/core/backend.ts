import { HttpEvent } from './response';
import { HttpRequest } from "./request"
import { Observable } from 'rxjs/internal/Observable'

/**
 * 将`HttpRequest`转化为 `HttpEvent`的事件流，最终会转为`HttpResponse`
 * 该对象将触发拦截器链的每一项 直到到达 `Backend`
 * 
 * 此对象为 `HttpInterceptor`的第二个参数
 */
export abstract class HttpHandler {
  abstract handle (req: HttpRequest<any>): Observable<HttpEvent<any>>
}

export abstract class HttpBackend implements HttpHandler {
  abstract handle (req: HttpRequest<any>): Observable<HttpEvent<any>>
}
