import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Auth {

    private static routeLogin: object = { 
        route : "/auth/login",
        method : RequestTypes.POST
    };

    private static routeRegister: object = { 
        route: "/auth/register",
        method : RequestTypes.POST
    };

   private static routeForgotPassword: object = { 
        route: "/auth/forgotpassword",
        method : RequestTypes.POST
    };

    private static routeLoginToOrganizer: object= { 
        route: "/auth/loginToOrganizer",
        method : RequestTypes.POST
    };

    private static routeRegisterToOrganizer: object = { 
        route: "/registerToOrganizer",
        method : RequestTypes.POST
    };

    public static login(data : object) {
        return Requests.post(this.routeLogin.route, data);
    }

    public static register(data : object) {
        return Requests.post(this.routeRegister.route, data);
    }

}

export default Auth;