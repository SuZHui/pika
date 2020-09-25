/**
 * copy from axios AxiosRequestConfig.Method
 */
declare type HttpRequestMethod = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';
declare type HttpResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
declare type FixedPikaConfig = {
    baseURL: string;
    url: string;
    headers: any;
    data: any;
    timeout: number;
    method: HttpRequestMethod;
    responseType: HttpResponseType;
};
export declare type PikaConfig = Partial<FixedPikaConfig>;
export interface AdaptorDispatch<T extends {}> {
    (cfg: PikaConfig): Promise<T>;
}
export declare function request<T>(config: PikaConfig, adaptor: AdaptorDispatch<T>): Promise<T>;
export declare class Pika {
    private config;
    private requestDispatch;
    /**
     * 构造Pika实例
     * @param config
     * @param adaptorFun 配置第三方请求组件 默认为axios
     */
    constructor(config?: PikaConfig, adaptorFun?: AdaptorDispatch<any>);
    /**
     * 发起请求
     * @param config
     */
    request<T extends unknown>(config?: PikaConfig): Promise<T>;
    post<T>(url: string, data: T, config?: PikaConfig): Promise<T>;
    get<T>(url: string, params: any, config?: PikaConfig): Promise<T>;
}
export {};
