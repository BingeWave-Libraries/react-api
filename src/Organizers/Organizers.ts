import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Organizers {

    private static routeListOrganizers: Route = { 
        route : "/organizers",
        method : RequestTypes.GET
    };

    private static routeCreateOrganizer: Route = { 
        route : "/organizers",
        method : RequestTypes.POST
    };

    private static routeViewOrganizer: Route = { 
        route : "/organizers/{id}",
        method : RequestTypes.GET
    };

    private static routeUpdateOrganizer: Route = { 
        route : "/organizers/{id}",
        method : RequestTypes.PUT
    };

    private static routeDeleterOrganizer: Route = { 
        route : "/organizers/{id}",
        method : RequestTypes.DELETE
    };

    private static routeSetUserToRoleWithOganizer: Route = { 
        route : "/organizers/{id}/setUserToRole",
        method : RequestTypes.POST
    };

    private static routeRemoveUserFromRoleWithOganizer: Route = { 
        route : "/organizers/{id}/removeUserFromRole",
        method : RequestTypes.POST
    };

    public static getOrganizers(query? : object | null, options? : object | null) {
        return Requests.get(this.routeListOrganizers.route, query);
    }

    public static createOrganizer(data : object, query? : object | null, options? : object | null) {
        return Requests.post(this.routeCreateOrganizer.route, data, query, options);
    }

    public static updateOrganizer(organizer_id: string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.put(route, data, query, options);
    }

    public static viewOrganizer(organizer_id: string, query? : object | null, options? : object | null) {
        let route = this.routeViewOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.get(route, query, options);
    }

    public static deleteOrganizer(organizer_id: string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleterOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.delete(route, data, query, options);
    }

    public static setUserToRole(organizer_id: string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeSetUserToRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    }

    public static removeUserFromRole(organizer_id: string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeRemoveUserFromRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    }

}

export default Organizers;