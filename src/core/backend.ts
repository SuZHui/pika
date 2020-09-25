export abstract class HttpHnadler {
  abstract handle (req: HttpRequest<any>): Promise<any>
}