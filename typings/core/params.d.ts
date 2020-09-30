export interface HttpParameterCodec {
    encodeKey(key: string): string;
    encodeValue(value: string): string;
    decodeKey(key: string): string;
    decodeValue(value: string): string;
}
export declare class HttpUrlEncodingCodec implements HttpParameterCodec {
    /**
     * 为URL参数或查询字符串编码键名。
     * @param key
     */
    encodeKey(key: string): string;
    encodeValue(value: string): string;
    decodeKey(key: string): string;
    decodeValue(value: string): string;
}
/**
 * HttpParams 对象的配置对象
 */
export interface HttpParamsOptions {
    fromString?: string;
    fromObject?: {
        [param: string]: string | ReadonlyArray<string>;
    };
    encoder?: HttpParameterCodec;
}
/**
 * http 请求/响应的序列化参数对象
 * 对应type为 `application/x-www-form-urlencoded`
 * This class is immutable; all mutation operations return a new instance.
 */
export declare class HttpParams {
    private map;
    private encoder;
    private updates;
    private cloneFrom;
    constructor(options?: HttpParamsOptions);
    /**
     * 检查对象是否包含给定的参数名
     * @param param
     */
    has(param: string): boolean;
    /**
     * 返回给定参数对应value的第一个值 如果不存在value则返回null
     * @param param
     */
    get(param: string): string | null;
    /**
     * 返回所有给定的param value,如果不存在 则返回null
     * @param param
     */
    getAll(param: string): string[] | null;
    /**
     * 返回所有的参数名
     */
    keys(): string[];
    /**
     * 追加一个新的value到已经存在的param列表中
     * @param param
     * @param value
     */
    append(param: string, value: string): HttpParams;
    /**
     * 设置param的新值 会替换掉原有的value列表
     * @param param
     * @param value
     */
    set(param: string, value: string): HttpParams;
    /**
     * 删除给定的param value, 如果value不传则删除整个param
     * @param param
     * @param value
     */
    delete(param: string, value?: string): HttpParams;
    /**
     * 将参数对象序列化为编码字符串， 键值对拼接为 `key=val`
     * 参数之间以`&`分隔
     * `a: ['1']` produces `'a=1'`
     * `b: []` produces `''`
     * `c: ['1', '2']` produces `'c=1&c=2'`
     */
    toString(): string;
    private clone;
    private init;
}
