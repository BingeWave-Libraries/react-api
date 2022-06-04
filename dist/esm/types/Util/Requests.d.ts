declare class Requests {
    static post: (url: any, data: any) => Promise<any>;
    static put: (url: any, data: any) => Promise<any>;
    static get: (url: any, data: any) => Promise<any>;
    static delete: (url: any, data: any) => Promise<any>;
    static _sendRequest: (url: any, method: any, data: any) => Promise<any>;
}
export default Requests;
