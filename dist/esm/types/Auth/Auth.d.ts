declare class Auth {
    private static routeLogin;
    private static routeRegister;
    private static routeForgotPassword;
    private static routeLoginToOrganizer;
    private static routeRegisterToOrganizer;
    static login(data: object, query?: object | null, options?: object | null): Promise<any>;
    static register(data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Auth;
