import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Auth {

    private static routeLogin: Route = {
        route: "/auth/login",
        method: RequestTypes.POST
    };

    private static routeRegister: Route = {
        route: "/auth/register",
        method: RequestTypes.POST
    };

    private static routeForgotPassword: Route = {
        route: "/auth/forgotpassword",
        method: RequestTypes.POST
    };

    private static routeLoginToOrganizer: Route = {
        route: "/auth/loginToOrganizer",
        method: RequestTypes.POST
    };

    private static routeRegisterToOrganizer: Route = {
        route: "/registerToOrganizer",
        method: RequestTypes.POST
    };

    public static login(data: object, query?: object | null, options?: object | null) {
        return Requests.post(this.routeLogin.route, data, query, options);
    }

    public static register(data: object, query?: object | null, options?: object | null) {
        return Requests.post(this.routeRegister.route, data, query, options);
    }

}

export default Auth;