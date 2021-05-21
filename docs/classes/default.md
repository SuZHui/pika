[xylitol](../README.md) / [Exports](../modules.md) / default

# Class: default

## Hierarchy

- *HttpClient*

  ↳ **default**

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [handler](default.md#handler)

### Methods

- [addInterceptor](default.md#addinterceptor)
- [delete](default.md#delete)
- [get](default.md#get)
- [head](default.md#head)
- [jsonp](default.md#jsonp)
- [options](default.md#options)
- [patch](default.md#patch)
- [post](default.md#post)
- [put](default.md#put)
- [removeInterceptor](default.md#removeinterceptor)
- [request](default.md#request)
- [create](default.md#create)
- [factory](default.md#factory)

## Constructors

### constructor

\+ **new default**(`handler`: *HttpInterceptingHandler*): [*default*](default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | *HttpInterceptingHandler* |

**Returns:** [*default*](default.md)

Overrides: HttpClient.constructor

Defined in: [core/Xylitol.ts:45](https://github.com/SuZHui/pika/blob/9c20eef/src/core/Xylitol.ts#L45)

## Properties

### handler

• `Protected` `Readonly` **handler**: *HttpHandler*

Inherited from: HttpClient.handler

## Methods

### addInterceptor

▸ **addInterceptor**(`interceptor`: HttpInterceptor): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `interceptor` | HttpInterceptor |

**Returns:** *number*

Defined in: [core/Xylitol.ts:50](https://github.com/SuZHui/pika/blob/9c20eef/src/core/Xylitol.ts#L50)

___

### delete

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<ArrayBuffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<ArrayBuffer\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:254](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L254)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<Blob\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Blob\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:262](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L262)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<string\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:270](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L270)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<ArrayBuffer\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:278](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L278)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Blob\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:286](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L286)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<string\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:292](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L292)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Object\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:298](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L298)

▸ **delete**<T\>(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<T\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:305](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L305)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<ArrayBuffer\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:312](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L312)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Blob\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:318](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L318)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<string\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:324](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L324)

▸ **delete**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Object\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:330](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L330)

▸ **delete**<T\>(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<T\>\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:337](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L337)

▸ **delete**(`url`: *string*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Object\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:344](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L344)

▸ **delete**<T\>(`url`: *string*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<T\>

Inherited from: HttpClient.delete

Defined in: [core/client.ts:352](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L352)

___

### get

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<ArrayBuffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<ArrayBuffer\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:371](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L371)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<Blob\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Blob\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:379](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L379)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<string\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:387](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L387)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<ArrayBuffer\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:395](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L395)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Blob\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:403](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L403)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<string\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:409](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L409)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Object\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:415](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L415)

▸ **get**<T\>(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<T\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:422](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L422)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<ArrayBuffer\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:429](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L429)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Blob\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:435](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L435)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<string\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:441](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L441)

▸ **get**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Object\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:447](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L447)

▸ **get**<T\>(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<T\>\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:454](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L454)

▸ **get**(`url`: *string*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Object\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:461](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L461)

▸ **get**<T\>(`url`: *string*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<T\>

Inherited from: HttpClient.get

Defined in: [core/client.ts:469](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L469)

___

### head

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<ArrayBuffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<ArrayBuffer\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:488](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L488)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<Blob\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Blob\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:495](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L495)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<string\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:502](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L502)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<ArrayBuffer\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:509](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L509)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Blob\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:515](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L515)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<string\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:521](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L521)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Object\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:527](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L527)

▸ **head**<T\>(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<T\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:534](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L534)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<ArrayBuffer\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:541](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L541)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Blob\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:547](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L547)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<string\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:553](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L553)

▸ **head**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Object\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:559](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L559)

▸ **head**<T\>(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<T\>\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:566](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L566)

▸ **head**(`url`: *string*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Object\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:573](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L573)

▸ **head**<T\>(`url`: *string*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<T\>

Inherited from: HttpClient.head

Defined in: [core/client.ts:581](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L581)

___

### jsonp

▸ **jsonp**(`url`: *string*, `callbackParam`: *string*): *Observable*<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `callbackParam` | *string* |

**Returns:** *Observable*<Object\>

Inherited from: HttpClient.jsonp

Defined in: [core/client.ts:600](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L600)

▸ **jsonp**<T\>(`url`: *string*, `callbackParam`: *string*): *Observable*<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `callbackParam` | *string* |

**Returns:** *Observable*<T\>

Inherited from: HttpClient.jsonp

Defined in: [core/client.ts:601](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L601)

___

### options

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<ArrayBuffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<ArrayBuffer\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:610](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L610)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<Blob\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Blob\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:617](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L617)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<string\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:624](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L624)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<ArrayBuffer\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:631](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L631)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Blob\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:637](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L637)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<string\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:643](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L643)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Object\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:649](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L649)

▸ **options**<T\>(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<T\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:656](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L656)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<ArrayBuffer\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:663](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L663)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Blob\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:669](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L669)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<string\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:675](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L675)

▸ **options**(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Object\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:681](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L681)

▸ **options**<T\>(`url`: *string*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<T\>\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:688](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L688)

▸ **options**(`url`: *string*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Object\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:695](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L695)

▸ **options**<T\>(`url`: *string*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<T\>

Inherited from: HttpClient.options

Defined in: [core/client.ts:703](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L703)

___

### patch

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<ArrayBuffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<ArrayBuffer\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:722](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L722)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<Blob\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Blob\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:729](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L729)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<string\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:736](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L736)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<ArrayBuffer\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:743](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L743)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Blob\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:749](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L749)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<string\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:755](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L755)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Object\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:761](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L761)

▸ **patch**<T\>(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<T\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:768](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L768)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<ArrayBuffer\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:775](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L775)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Blob\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:781](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L781)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<string\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:787](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L787)

▸ **patch**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Object\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:793](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L793)

▸ **patch**<T\>(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<T\>\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:800](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L800)

▸ **patch**(`url`: *string*, `body`: *any*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Object\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:807](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L807)

▸ **patch**<T\>(`url`: *string*, `body`: *any*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<T\>

Inherited from: HttpClient.patch

Defined in: [core/client.ts:815](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L815)

___

### post

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<ArrayBuffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<ArrayBuffer\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:834](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L834)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<Blob\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Blob\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:841](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L841)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<string\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:848](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L848)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<ArrayBuffer\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:855](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L855)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Blob\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:861](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L861)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<string\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:867](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L867)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Object\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:873](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L873)

▸ **post**<T\>(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<T\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:880](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L880)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<ArrayBuffer\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:887](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L887)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Blob\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:893](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L893)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<string\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:899](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L899)

▸ **post**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Object\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:905](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L905)

▸ **post**<T\>(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<T\>\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:912](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L912)

▸ **post**(`url`: *string*, `body`: *any*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Object\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:919](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L919)

▸ **post**<T\>(`url`: *string*, `body`: *any*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<T\>

Inherited from: HttpClient.post

Defined in: [core/client.ts:927](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L927)

___

### put

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<ArrayBuffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<ArrayBuffer\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:946](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L946)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<Blob\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Blob\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:953](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L953)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<string\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:960](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L960)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<ArrayBuffer\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:967](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L967)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Blob\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:973](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L973)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<string\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:979](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L979)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Object\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:985](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L985)

▸ **put**<T\>(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<T\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:992](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L992)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<ArrayBuffer\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:999](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L999)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Blob\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:1005](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L1005)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<string\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:1011](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L1011)

▸ **put**(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Object\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:1017](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L1017)

▸ **put**<T\>(`url`: *string*, `body`: *any*, `options`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<T\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<T\>\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:1024](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L1024)

▸ **put**(`url`: *string*, `body`: *any*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Object\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:1031](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L1031)

▸ **put**<T\>(`url`: *string*, `body`: *any*, `options?`: { `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* |
| `body` | *any* |
| `options?` | *object* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<T\>

Inherited from: HttpClient.put

Defined in: [core/client.ts:1039](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L1039)

___

### removeInterceptor

▸ **removeInterceptor**(`id`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *number* |

**Returns:** *void*

Defined in: [core/Xylitol.ts:55](https://github.com/SuZHui/pika/blob/9c20eef/src/core/Xylitol.ts#L55)

___

### request

▸ **request**<R\>(`req`: *HttpRequest*<any\>): *Observable*<HttpEvent<R\>\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | *HttpRequest*<any\> |

**Returns:** *Observable*<HttpEvent<R\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:40](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L40)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<ArrayBuffer\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<ArrayBuffer\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:42](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L42)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<Blob\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Blob\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:51](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L51)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<string\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:60](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L60)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<ArrayBuffer\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:69](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L69)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<Blob\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:76](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L76)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<string\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:83](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L83)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<any\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<any\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:90](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L90)

▸ **request**<R\>(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"events"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpEvent<R\>\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"events"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpEvent<R\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:98](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L98)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"arraybuffer"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<ArrayBuffer\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"arraybuffer"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<ArrayBuffer\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:106](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L106)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"blob"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Blob\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"blob"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Blob\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:113](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L113)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType`: ``"text"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<string\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType` | ``"text"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<string\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:120](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L120)

▸ **request**(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<Object\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<Object\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:127](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L127)

▸ **request**<R\>(`method`: *string*, `url`: *string*, `options`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe`: ``"response"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<HttpResponse<R\>\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe` | ``"response"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<HttpResponse<R\>\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:135](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L135)

▸ **request**(`method`: *string*, `url`: *string*, `options?`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options?` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<Object\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:143](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L143)

▸ **request**<R\>(`method`: *string*, `url`: *string*, `options?`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: ``"body"`` ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<R\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options?` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | ``"body"`` |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<R\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:152](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L152)

▸ **request**(`method`: *string*, `url`: *string*, `options?`: { `body?`: *any* ; `headers?`: *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } ; `observe?`: HttpObserve ; `params?`: *HttpParams* \| { [param: string]: *string* \| *string*[];  } ; `reportProgress?`: *boolean* ; `responseType?`: ``"arraybuffer"`` \| ``"blob"`` \| ``"text"`` \| ``"json"`` ; `withCredentials?`: *boolean*  }): *Observable*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | *string* |
| `url` | *string* |
| `options?` | *object* |
| `options.body?` | *any* |
| `options.headers?` | *HttpHeaders* \| { [header: string]: *string* \| *string*[];  } |
| `options.observe?` | HttpObserve |
| `options.params?` | *HttpParams* \| { [param: string]: *string* \| *string*[];  } |
| `options.reportProgress?` | *boolean* |
| `options.responseType?` | ``"arraybuffer"`` \| ``"blob"`` \| ``"text"`` \| ``"json"`` |
| `options.withCredentials?` | *boolean* |

**Returns:** *Observable*<any\>

Inherited from: HttpClient.request

Defined in: [core/client.ts:161](https://github.com/SuZHui/pika/blob/9c20eef/src/core/client.ts#L161)

___

### create

▸ `Static` **create**(): [*default*](default.md)

**Returns:** [*default*](default.md)

Defined in: [core/Xylitol.ts:60](https://github.com/SuZHui/pika/blob/9c20eef/src/core/Xylitol.ts#L60)

___

### factory

▸ `Static` **factory**(): XylitolFactory

**Returns:** XylitolFactory

Defined in: [core/Xylitol.ts:69](https://github.com/SuZHui/pika/blob/9c20eef/src/core/Xylitol.ts#L69)
