export interface HttpInterceptor {
  intercept (req: RequestInit, next: HttpHandler): Promise<any>
}
