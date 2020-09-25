export interface HttpParameterCodec {
  encodeKey(key: string): string
  encodeValue(value: string): string

  decodeKey(key: string): string
  decodeValue(value: string): string
}

export class HttpUrlEncodingCodec implements HttpParameterCodec {
  /**
   * 为URL参数或查询字符串编码键名。
   * @param key
   */
  encodeKey (key: string): string {
    return standardEncoding(key)
  }

  encodeValue (value: string): string {
    return standardEncoding(value)
  }

  decodeKey (key: string): string {
    return decodeURIComponent(key)
  }

  decodeValue (value: string): string {
    return decodeURIComponent(value)
  }
}

function paramParser (rawParams: string, codec: HttpParameterCodec): Map<string, string[]> {
  const map = new Map<string, string[]>()
  if (rawParams.length > 0) {
    const params: string[] = rawParams.split('&')
    params.forEach((param: string) => {
      const eqIdx = param.indexOf('=')
      const [key, val]: string[] = eqIdx === -1
        ? [codec.decodeKey(param), '']
        : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))]
      const list = map.get(key) || []
      list.push(val)
      map.set(key, list)
    })
  }
  return map
}

function standardEncoding (v: string): string {
  return encodeURIComponent(v)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/gi, '$')
    .replace(/%2C/gi, ',')
    .replace(/%3B/gi, ';')
    .replace(/%2B/gi, '+')
    .replace(/%3D/gi, '=')
    .replace(/%3F/gi, '?')
    .replace(/%2F/gi, '/')
}

interface Update {
  param: string
  value?: string
  op: 'a'|'d'|'s'
}

/**
 * HttpParams 对象的配置对象
 */
export interface HttpParamsOptions {
  fromString?: string

  fromObject?: {[param: string]: string| ReadonlyArray<string>}

  encoder?: HttpParameterCodec
}

/**
 * http 请求/响应的序列化参数对象
 * 对应type为 `application/x-www-form-urlencoded`
 * This class is immutable; all mutation operations return a new instance.
 */
export class HttpParams {
  private map: Map<string, string[]>|null
  private encoder: HttpParameterCodec
  private updates: Update[]|null = null
  private cloneFrom: HttpParams|null = null

  constructor (options: HttpParamsOptions = {} as HttpParamsOptions) {
    this.encoder = options.encoder || new HttpUrlEncodingCodec()
    if (options.fromString) {
      if (options.fromObject) {
        throw new Error('Cannot specify both fromString and fromObject.')
      }
      this.map = paramParser(options.fromString, this.encoder)
    } else if (options.fromObject) {
      this.map = new Map<string, string[]>()
      Object.keys(options.fromObject).forEach(key => {
        const value = (options.fromObject as any)[key]
        this.map!.set(key, Array.isArray(value) ? value : [value])
      })
    } else {
      this.map = null
    }
  }

  /**
   * 检查对象是否包含给定的参数名
   * @param param
   */
  has (param: string): boolean {
    this.init()
    return this.map!.has(param)
  }

  /**
   * 返回给定参数对应value的第一个值 如果不存在value则返回null
   * @param param
   */
  get (param: string): string|null {
    this.init()
    const res = this.map!.get(param)
    return res ? res[0] : null
  }

  /**
   * 返回所有给定的param value,如果不存在 则返回null
   * @param param
   */
  getAll (param: string): string[]|null {
    this.init()
    return this.map!.get(param) || null
  }

  /**
   * 返回所有的参数名
   */
  keys (): string[] {
    this.init()
    return Array.from(this.map!.keys())
  }

  /**
   * 追加一个新的value到已经存在的param列表中
   * @param param
   * @param value
   */
  append (param: string, value: string): HttpParams {
    return this.clone({ param, value, op: 'a' })
  }

  /**
   * 设置param的新值 会替换掉原有的value列表
   * @param param
   * @param value
   */
  set (param: string, value: string): HttpParams {
    return this.clone({ param, value, op: 's' })
  }

  /**
   * 删除给定的param value, 如果value不传则删除整个param
   * @param param
   * @param value
   */
  delete (param: string, value?: string): HttpParams {
    return this.clone({ param, value, op: 'd' })
  }

  /**
   * 将参数对象序列化为编码字符串， 键值对拼接为 `key=val`
   * 参数之间以`&`分隔
   * `a: ['1']` produces `'a=1'`
   * `b: []` produces `''`
   * `c: ['1', '2']` produces `'c=1&c=2'`
   */
  toString (): string {
    this.init()
    return this.keys()
      .map(key => {
        const eKey = this.encoder.encodeKey(key)
        return this.map!.get(key)!.map(value => eKey + '=' + this.encoder.encodeValue(value))
          .join('&')
      })
      // filter out empty values because `b: []` produces `''`
      // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
      .filter(param => param !== '')
      .join('&')
  }

  private clone (update: Update) {
    const clone = new HttpParams({ encoder: this.encoder } as HttpParamsOptions)
    clone.cloneFrom = this.cloneFrom || this
    clone.updates = (this.updates || []).concat([update])
    return clone
  }

  private init () {
    if (this.map === null) {
      this.map = new Map<string, string[]>()
    }
    if (this.cloneFrom !== null) {
      this.cloneFrom.init()
      this.cloneFrom.keys().forEach(key => this.map!.set(key, this.cloneFrom!.map!.get(key)!))
      this.updates!.forEach(update => {
        switch (update.op) {
          case 'a':
          case 's':
            const base = (update.op === 'a' ? this.map!.get(update.param) : undefined) || []
            base.push(update.value!)
            this.map!.set(update.param, base)
            break
          case 'd':
            // 如果uodate对象设置了value 则比对map中相同update.param的数组，删除相同的项
            if (update.value !== undefined) {
              const base = this.map!.get(update.param) || []
              const idx = base.indexOf(update.value)
              if (idx !== -1) {
                base.splice(idx, 1)
              }
              if (base.length > 0) {
                this.map!.set(update.param, base)
              } else {
                this.map!.delete(update.param)
              }
            // 如果update对象未设置value 则直接删除map对象中对应的update.param
            } else {
              this.map!.delete(update.param)
              break
            }
        }
      })
      this.cloneFrom = this.updates = null
    }
  }
}
