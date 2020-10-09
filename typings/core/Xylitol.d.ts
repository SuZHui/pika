import { HttpClient } from './client';
import { HttpInterceptor } from './interceptor';
export declare class Xylitol {
    private interceptors;
    useInterceptors(interceptors?: HttpInterceptor[]): Xylitol;
    create(): HttpClient;
}
