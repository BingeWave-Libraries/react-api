import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Events {

    private static routeCreateEvent: Route = { 
        route : "/events",
        method : RequestTypes.POST
    };

    private static routeListEvents: Route = { 
        route : "/events",
        method : RequestTypes.GET
    };

    private static routeUpdateEvent: Route = { 
        route : "/events/{id}/design",
        method : RequestTypes.PUT
    };

    private static routeUpdateEventDesign: Route = { 
        route : "/events/{id}",
        method : RequestTypes.PUT
    };

    private static routeViewEvent: Route = { 
        route : "/events/{id}",
        method : RequestTypes.GET
    };

    private static routeDeleteEvent: Route = { 
        route : "/events/{id}",
        method : RequestTypes.DELETE
    };

    public static createEvent(data : object, query? : object | null, options? : object | null) {
        return Requests.post(this.routeCreateEvent.route, data, query, options);
    }

    public static viewEvent(event_id : string, query? : object | null, options? : object | null) {
        let route = this.routeViewEvent.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    }

    public static getEvents(query? : object | null, options? : object | null) {
        return Requests.get(this.routeViewEvent.route, query, options);
    }

    public static updateEvent(event_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateEvent.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    }

    public static updateEventDesign(event_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateEventDesign.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    }

    public static deleteEvent(event_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteEvent.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    }

}

export default Events;