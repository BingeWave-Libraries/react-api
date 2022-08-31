import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Accounts {

    private static routeProfile: Route = {
        route: "/accounts/{id}",
        method: RequestTypes.GET
    };

    private static routeList: Route = {
        route: "/accounts",
        method: RequestTypes.GET
    };

    private static routeUpdate: Route = {
        route: "/accounts",
        method: RequestTypes.PUT
    };

    private static routeMyTickets: Route = {
        route: "/accounts/mytickets",
        method: RequestTypes.GET
    };

    private static routeMe: Route = {
        route: "/accounts/me",
        method: RequestTypes.GET
    };

    private static routeSetPreference: Route = {
        route: "/accounts/{id}/setPreference",
        method: RequestTypes.POST
    };

    private static routeRemovePreference: Route = {
        route: "/accounts/{id}/removePreference/{key}",
        method: RequestTypes.DELETE
    };

    private static routeSetSecurePreference: Route = {
        route: "/accounts/{id}/setSecurePreference",
        method: RequestTypes.POST
    };

    private static routeRemoveSecurePreference: Route = {
        route: "/accounts/{id}/removeSecurePreference/{key}",
        method: RequestTypes.DELETE
    };

    private static routeSetProfileImage: Route = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes.POST
    };

    private static routeSetAvatarImage: Route = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes.POST
    };
    

    public static getProfile(user_id : string, query?: object | null, options?: object | null) {
        let route = this.routeProfile.route.replaceAll('{id}', user_id);

        return Requests.get(route, query, options);
    }

    public static getAccounts( query?: object | null, options?: object | null) {
        let route = this.routeList.route;

        return Requests.get(route, query, options);
    }

    public static getMyTickets( query?: object | null, options?: object | null) {
        let route = this.routeMyTickets.route;

        return Requests.get(route, query, options);
    }

    public static getMe( query?: object | null, options?: object | null) {
        let route = this.routeMe.route;

        return Requests.get(route, query, options);
    }

    public static updateAccount(data: object , query?: object | null, options?: object | null) {
        let route = this.routeUpdate.route;

        return Requests.put(route, data, query, options);
    }

    public static setPreference(user_id : string, data: object, query?: object | null, options?: object | null) {
        let route = this.routeSetPreference.route.replaceAll('{id}', user_id);

        return Requests.post(route, data, query, options);
    }

    public static removePreference(user_id : string, key : string, data?: object | null | undefined, query?: object | null, options?: object | null) {
        let route = this.routeRemovePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);

        return Requests.delete(route, data, query, options);
    }

    public static setSecurePreference(user_id : string, data: object, query?: object | null, options?: object | null) {
        let route = this.routeSetSecurePreference.route.replaceAll('{id}', user_id);

        return Requests.post(route, data, query, options);
    }

    public static removeSecurePreference(user_id : string, key : string, data?: object | null | undefined, query?: object | null, options?: object | null) {
        let route = this.routeRemoveSecurePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);

        return Requests.delete(route, data, query, options);
    }

}

export default Accounts;