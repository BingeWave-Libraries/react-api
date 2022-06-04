declare class Requests {
    static post: (url: string, data: object, query?: object | null, options?: object | null) => Promise<any>;
    static put: (url: string, data: object, query?: object | null, options?: object | null) => Promise<any>;
    static get: (url: string, query?: object | null, options?: object | null) => Promise<any>;
    static delete: (url: string, data: object, query?: object | null, options?: object | null) => Promise<any>;
    private static _sendRequest;
    private static toQueryString;
}
export default Requests;
