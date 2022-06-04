declare class Auth {
    static routeLogin: object;
    static routeRegister: object;
    static routeForgotPassword: object;
    static routeLoginToOrganizer: object;
    static routeRegisterToOrganizer: object;
    static login(data: any): Promise<any>;
    static register(data: any): Promise<any>;
}
export default Auth;
