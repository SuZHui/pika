import { Pika } from './core/Pika';
declare const create: (config?: Partial<{
    baseURL: string;
    url: string;
    headers: any;
    data: any;
    timeout: number;
    method: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH";
    responseType: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";
}> | undefined) => Pika;
export { create };
