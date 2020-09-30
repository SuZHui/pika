import { HttpClient } from './client';
import { HttpInterceptor } from './interceptor';
export declare class Pika {
    private interceptors;
    useInterceptors(interceptors?: HttpInterceptor[]): Pika;
    create(): HttpClient;
}
