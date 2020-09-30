import { Observable, Observer } from 'rxjs'
import { HttpBackend, HttpHandler } from './backend'
import { HttpRequest } from './request'
import { HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from './response'

let nextRequestId = 0

export const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'
export const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.'
export const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.'

export abstract class JsonpCallbackContext {
  [key: string]: (data: any) => void
}

export class JsonpClientBackend implements HttpBackend {
  private document: Document

  constructor(private callbackMap: JsonpCallbackContext) {
    if (!document) {
      throw new Error('Document is not found')
    }
    this.document = document
  }

  private nextCallback (): string {
    return `pika_jsonp_callback_${nextRequestId++}`
  }

  handle(req: HttpRequest<never>): Observable<HttpEvent<any>> {
    if (req.method !== 'JSONP') {
      throw new Error(JSONP_ERR_WRONG_METHOD)
    } else if (req.responseType !== 'json') {
      throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE)
    }

    return new Observable<HttpEvent<any>>((observer: Observer<HttpEvent<any>>) => {
      const callback = this.nextCallback()
      const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`)

      const node = this.document.createElement('script')
      node.src = url

      let body: any|null = null
      let finished = false
      let cancelled = false

      this.callbackMap[callback] = (data?: any) => {
        delete this.callbackMap[callback]

        if (cancelled) {
          return
        }

        body = data
        finished = true
      }

      const cleanup = () => {
        // Remove the <script> tag if it's still on the page.
        if (node.parentNode) {
          node.parentNode.removeChild(node)
        }

        delete this.callbackMap[callback]
      }

      const onLoad = () => {
        // Do nothing if the request has been cancelled.
        if (cancelled) {
          return
        }

        // Cleanup the page.
        cleanup();

        // Check whether the response callback has run.
        if (!finished) {
          // It hasn't, something went wrong with the request. Return an error via
          // the Observable error path. All JSONP errors have status 0.
          observer.error(new HttpErrorResponse({
            url,
            status: 0,
            statusText: 'JSONP Error',
            error: new Error(JSONP_ERR_NO_CALLBACK),
          }));
          return
        }

        // Success. body either contains the response body or null if none was
        // returned.
        observer.next(new HttpResponse({
          body,
          status: 200,
          statusText: 'OK',
          url,
        }))

        // Complete the stream, the response is over.
        observer.complete()
      }

      const onError: any = (error: Error) => {
        // If the request was already cancelled, no need to emit anything.
        if (cancelled) {
          return;
        }
        cleanup();

        // Wrap the error in a HttpErrorResponse.
        observer.error(new HttpErrorResponse({
          error,
          status: 0,
          statusText: 'JSONP Error',
          url,
        }));
      }

      node.addEventListener('load', onLoad);
      node.addEventListener('error', onError);
      this.document.body.appendChild(node);

      // The request has now been successfully sent.
      observer.next({ type: HttpEventType.Sent });

      // Cancellation handler.
      return () => {
        // Track the cancellation so event listeners won't do anything even if already scheduled.
        cancelled = true;

        // Remove the event listeners so they won't run if the events later fire.
        node.removeEventListener('load', onLoad);
        node.removeEventListener('error', onError);

        // And finally, clean up the page.
        cleanup()
      }
    })
  }
}

export class JsonpInterceptor {
  constructor(private jsonp: JsonpClientBackend) {}

  /**
   * Identifies and handles a given JSONP request.
   * @param req The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'JSONP') {
      return this.jsonp.handle(req as HttpRequest<never>);
    }
    // Fall through for normal HTTP requests.
    return next.handle(req);
  }
}
