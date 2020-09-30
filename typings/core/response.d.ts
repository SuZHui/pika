import { HttpHeaders } from './headers';
export declare enum HttpEventType {
    Sent = 0,
    UploadProgress = 1,
    ResponseHeader = 2,
    DownloadProgress = 3,
    Response = 4,
    User = 5
}
export interface HttpProgressEvent {
    type: HttpEventType.DownloadProgress | HttpEventType.UploadProgress;
    loaded: number;
    total?: number;
}
export interface HttpDownloadProgressEvent extends HttpProgressEvent {
    type: HttpEventType.DownloadProgress;
    /**
     * The partial response body as downloaded so far.
     *
     * Only present if the responseType was `text`.
     */
    partialText?: string;
}
export interface HttpUploadProgressEvent extends HttpProgressEvent {
    type: HttpEventType.UploadProgress;
}
export interface HttpSentEvent {
    type: HttpEventType.Sent;
}
/**
 * 用户自定义回调事件
 */
export interface HttpUserEvent {
    type: HttpEventType.User;
}
/**
 * json解析错误接口
 */
export interface HttpJsonParseError {
    error: Error;
    text: string;
}
/**
 * `HttpResponse` 和 `HttpHeaderResponse`的基类
 */
export declare abstract class HttpResponseBase {
    readonly headers: HttpHeaders;
    readonly status: number;
    readonly statusText: string;
    readonly url: string | null;
    readonly ok: boolean;
    readonly type: HttpEventType.Response | HttpEventType.ResponseHeader;
    /**
     *  所有响应的构造函数
     */
    constructor(init: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }, defaultStatus?: number, defaultStatusText?: string);
}
export declare class HttpHeaderResponse extends HttpResponseBase {
    constructor(init?: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
    readonly type: HttpEventType.ResponseHeader;
    clone(update?: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpHeaderResponse;
}
export declare class HttpResponse<T> extends HttpResponseBase {
    readonly body: T | null;
    constructor(init?: {
        body?: T | null;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
    readonly type: HttpEventType.Response;
    clone(): HttpResponse<T>;
    clone(update: {
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpResponse<T>;
    clone<V>(update: {
        body?: V | null;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    }): HttpResponse<V>;
}
export declare type HttpEvent<T> = HttpSentEvent | HttpHeaderResponse | HttpResponse<T> | HttpProgressEvent | HttpUserEvent;
export declare class HttpErrorResponse extends HttpResponseBase implements Error {
    readonly name: string;
    readonly message: string;
    readonly error?: any | null;
    constructor(init: {
        error?: any;
        headers?: HttpHeaders;
        status?: number;
        statusText?: string;
        url?: string;
    });
}
