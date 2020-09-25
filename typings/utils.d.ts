/**
 * 通过传入的对象 过滤出 fetch api 对应的字段
 * @param config
 */
declare function filterOutFetchOptionFields(config: Record<string, any>): Record<string, any>;
export { filterOutFetchOptionFields };
