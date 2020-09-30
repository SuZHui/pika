export declare class HttpHeaders {
    private headers;
    private normalizedNames;
    private lazyInit;
    private lazyUpdate;
    constructor(headers?: string | {
        [name: string]: string | string[];
    });
    /**
     * 给定的header 字段是否存在
     * @param name
     */
    has(name: string): boolean;
    /**
     * 获取给定header key所对应的第一个值
     * @param name
     */
    get(name: string): string | null;
    /**
     * 获取当前headers 所有的key
     */
    keys(): string[];
    /**
     * 获取对应name下的value数组
     * @param name
     */
    getAll(name: string): string[] | null;
    /**
     * 将新值追加到headers的现有集合中 并在返回一个新的httpHeaders实例。
     * @param name
     * @param value
     */
    append(name: string, value: string | string[]): HttpHeaders;
    /**
     * 在克隆的httpHeaders中设置新值并返回对象
     * @param name
     * @param value
     */
    set(name: string, value: string | string[]): HttpHeaders;
    /**
     * 在克隆的httpHeaders中删除给定的key。
     * @param name
     * @param value
     */
    delete(name: string, value?: string | string[]): HttpHeaders;
    private init;
    private copyFrom;
    private clone;
    private applyUpdate;
    private maybeSetNormalizedName;
    forEach(fn: (name: string, value: string[]) => void): void;
}
