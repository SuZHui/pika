import { HttpHeaders } from './headers';
import { HttpParams } from './params';
/**
 * 请求实体 包含http请求携带的所有参数
 */
export declare class HttpRequest<T> {
    readonly url: string;
    /**
     * 请求体 或 null
     */
    readonly body: T | null;
    readonly headers: HttpHeaders;
    readonly reportProgress: boolean;
    readonly responseType: 'arraybuffer' | 'blob' | 'json' | 'text';
    readonly method: string;
    readonly params: HttpParams;
    /**
     * 请求是否携带cookie
     */
    readonly urlWithParams: string;
    readonly withCredentials: boolean;
    constructor(method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS', url: string, init?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    });
    constructor(method: 'POST' | 'PUT' | 'PATCH', url: string, body: T | null, init?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    });
    constructor(method: string, url: string, body: T | null, init?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
    });
    /**
     * 将请求体进行序列变化
     */
    serializeBody(): ArrayBuffer | Blob | FormData | string | null;
    /**
     * 推断body的 MIME type
     * 如股票没有可以推断的类型 则返回null
     */
    detectContentTypeHeader(): string | null;
    clone(): HttpRequest<T>;
    clone(update: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        body?: T | null;
        method?: string;
        url?: string;
        setHeaders?: {
            [name: string]: string | string[];
        };
        setParams?: {
            [param: string]: string;
        };
    }): HttpRequest<T>;
    clone<V>(update: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        body?: V | null;
        method?: string;
        url?: string;
        setHeaders?: {
            [name: string]: string | string[];
        };
        setParams?: {
            [param: string]: string;
        };
    }): HttpRequest<V>;
}
