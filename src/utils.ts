/**
 * 通过传入的对象 过滤出 fetch api 对应的字段
 * @param config 
 */
function filterOutFetchOptionFields (config: Record<string, any>) {
  const fetchOptionFields = [
    'body', 'cache', 'credentials', 'headers', 'integrity', 'keepalive', 'method',
    'mode', 'redirect', 'referrer', 'referrerPolicy', 'signal', 'window'
  ]
  return Object.keys(config)
    .reduce<Record<string, any>>((prev, key) => {
      if (fetchOptionFields.includes(key)) {
        prev[key] = config[key]
      }
      return prev
    }, {})
}

export {
  filterOutFetchOptionFields
}