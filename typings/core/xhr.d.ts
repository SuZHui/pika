import { Observable } from 'rxjs';
import { HttpBackend } from './backend';
import { HttpRequest } from './request';
import { HttpEvent } from './response';
export declare abstract class XhrFactory {
    abstract build(): XMLHttpRequest;
}
export declare class BrowserXhr implements XhrFactory {
    build(): any;
}
export declare class HttpXhrBackend implements HttpBackend {
    private xhrFactory;
    constructor(xhrFactory: XhrFactory);
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
}
