interface Update {
  name: string
  value?: string|string[]
  op: 'a'|'s'|'d'
}

export class HttpHeaders {
  private headers!: Map<string, string[]>

  private normalizedNames: Map<string, string> = new Map()

  private lazyInit!: HttpHeaders | Function | null

  private lazyUpdate: Update[] | null = null

  constructor (headers?: string | {[name: string]: string | string[]}) {
    if (!headers) {
      this.headers = new Map<string, string[]>()
    } else if (typeof headers === 'string') {
      this.lazyInit = () => {
        this.headers = new Map<string, string[]>()
        headers.split('\n').forEach(line => {
          const index = line.indexOf(':')
          if (index > 0) {
            const name = line.slice(0, index)
            const key = name.toLowerCase()
            const value = line.slice(index + 1).trim()
            this.maybeSetNormalizedName(name, key)
            if (this.headers.has(key)) {
              this.headers.get(key)!.push(value)
            } else {
              this.headers.set(key, [value])
            }
          }
        })
      }
    } else {
      this.lazyInit = () => {
        this.headers = new Map<string, string[]>()
        Object.keys(headers).forEach(name => {
          let values: string|string[] = headers[name]
          const key = name.toLowerCase()
          if (typeof values === 'string') {
            values = [values]
          }
          if (values.length > 0) {
            this.headers.set(key, values)
            this.maybeSetNormalizedName(name, key)
          }
        })
      }
    }
  }

  /**
   * 给定的header 字段是否存在
   * @param name
   */
  has (name: string): boolean {
    this.init()
    return this.headers.has(name.toLowerCase())
  }

  /**
   * 获取给定header key所对应的第一个值
   * @param name
   */
  get (name: string): string | null {
    this.init()
    const values = this.headers.get(name.toLowerCase())
    return values && values.length > 0 ? values[0] : null
  }

  /**
   * 获取当前headers 所有的key
   */
  keys (): string[] {
    this.init()
    return Array.from(this.normalizedNames.values())
  }

  /**
   * 获取对应name下的value数组
   * @param name
   */
  getAll (name: string): string[] | null {
    this.init()
    return this.headers.get(name.toLowerCase()) || null
  }

  /**
   * 将新值追加到headers的现有集合中 并在返回一个新的httpHeaders实例。
   * @param name
   * @param value
   */
  append (name: string, value: string|string[]): HttpHeaders {
    return this.clone({ name, value, op: 'a' })
  }

  /**
   * 在克隆的httpHeaders中设置新值并返回对象
   * @param name
   * @param value
   */
  set (name: string, value: string|string[]): HttpHeaders {
    return this.clone({ name, value, op: 's' })
  }

  /**
   * 在克隆的httpHeaders中删除给定的key。
   * @param name
   * @param value
   */
  delete (name: string, value?: string|string[]): HttpHeaders {
    return this.clone({ name, value, op: 'd' })
  }

  private init (): void {
    if (this.lazyInit) {
      if (this.lazyInit instanceof HttpHeaders) {
        this.copyFrom(this.lazyInit)
      } else {
        this.lazyInit()
      }
      this.lazyInit = null
      if (this.lazyUpdate) {
        this.lazyUpdate.forEach(update => this.applyUpdate(update))
        this.lazyUpdate = null
      }
    }
  }

  private copyFrom (other: HttpHeaders) {
    other.init()
    Array.from(other.headers.keys()).forEach(key => {
      this.headers.set(key, other.headers.get(key)!)
      this.normalizedNames.set(key, other.normalizedNames.get(key)!)
    })
  }

  private clone (update: Update) {
    const clone = new HttpHeaders()
    clone.lazyInit =
      (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update])
    return clone
  }

  private applyUpdate (update: Update): void {
    const key = update.name.toLowerCase()
    switch (update.op) {
      case 'a':
      case 's':
        let value = update.value!
        if (typeof value === 'string') {
          value = [value]
        }
        if (value.length === 0) return
        this.maybeSetNormalizedName(update.name, key)
        const base = (update.op === 'a' ? this.headers.get(key) : undefined) || []
        base.push(...value)
        this.headers.set(key, base)
        break
      case 'd':
        const toDelete = update.value as string | undefined
        if (!toDelete) {
          this.headers.delete(key)
          this.normalizedNames.delete(key)
        } else {
          let existing = this.headers.get(key)
          if (!existing) return
          existing = existing.filter(value => toDelete.indexOf(value) === -1)
          if (existing.length === 0) {
            this.headers.delete(key)
            this.normalizedNames.delete(key)
          } else {
            this.headers.set(key, existing)
          }
        }
        break
    }
  }

  private maybeSetNormalizedName (name: string, lcName: string): void {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name)
    }
  }

  forEach (fn: (name: string, value: string[]) => void) {
    this.init()
    Array.from(this.normalizedNames.keys())
      .forEach(key => fn(this.normalizedNames.get(key)!, this.headers.get(key)!))
  }
}
