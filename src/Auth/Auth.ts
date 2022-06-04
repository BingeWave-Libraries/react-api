import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Auth {

    static routeLogin: object = { 
        route : "/auth/login",
        method : RequestTypes.POST
    };

    static routeRegister: object = { 
        route: "/auth/register",
        method : RequestTypes.POST
    };

    static routeForgotPassword: object = { 
        route: "/auth/forgotpassword",
        method : RequestTypes.POST
    };

    static routeLoginToOrganizer: object= { 
        route: "/auth/loginToOrganizer",
        method : RequestTypes.POST
    };

    static routeRegisterToOrganizer: object = { 
        route: "/registerToOrganizer",
        method : RequestTypes.POST
    };

    static login(data) {
        return Requests.post(this.routeLogin.route, data);
    }

    static register(data) {
        return Requests.post(this.routeRegister.route, data);
    }

}

export default Auth;