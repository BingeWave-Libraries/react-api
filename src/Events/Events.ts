import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Events {

    private static routeCreateEvent: object = { 
        route : "/events",
        method : RequestTypes.POST
    };

    private static routeListEvents: object = { 
        route : "/events",
        method : RequestTypes.GET
    };

    private static routeUpdateEvent: object = { 
        route : "/events/{id}/design",
        method : RequestTypes.PUT
    };

    private static routeUpdateEventDesign: object = { 
        route : "/events/{id}",
        method : RequestTypes.PUT
    };

    private static routeViewEvent: object = { 
        route : "/events/{id}",
        method : RequestTypes.GET
    };

    private static routeDeleteEvent: object = { 
        route : "/events/{id}",
        method : RequestTypes.DELETE
    };

    static createEvent(data : object) {
        return Requests.post(this.routeCreateEvent.route, data);
    }

    static viewEvent(id : string, data : object) {
        let route = this.routeViewEvent.route.replaceAll('{id}', id);
        return Requests.get(route, data);
    }

    static updateEvent(id : string, data : object) {
        let route = this.routeUpdateEvent.route.replaceAll('{id}', id);
        return Requests.put(route, data);
    }

    static updateEventDesign(id : string, data : object) {
        let route = this.routeUpdateEventDesign.route.replaceAll('{id}', id);
        return Requests.put(route, data);
    }

    static deleteEvent(id : string, data : object) {
        let route = this.routeDeleteEvent.route.replaceAll('{id}', id);
        return Requests.delete(route, data);
    }

}

export default Events;