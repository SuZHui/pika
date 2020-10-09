import { Observable } from 'rxjs/internal/Observable';
import { HttpEvent } from './response';
import { HttpHandler } from './backend';
import { HttpRequest } from './request';
export interface HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
export declare class HttpInterceptorHandler implements HttpHandler {
    private next;
    private interceptor;
    constructor(next: HttpHandler, interceptor: HttpInterceptor);
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
}
