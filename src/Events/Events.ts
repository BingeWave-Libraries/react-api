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
        route : "/events/{id}",
        method : RequestTypes.PUT
    };

    private static routeUpdateEventDesign: Route = { 
        route : "/events/{id}/design",
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

    private static routeGetMessagesEvent: Route = { 
        route : "/events/{id}/messages",
        method : RequestTypes.GET
    };

    private static routeSendMessageEvent: Route = { 
        route : "/events/{id}/messages",
        method : RequestTypes.POST
    };

    private static routeViewMessagesEvent: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.GET
    };

    private static routeUpdateMessagesEvent: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.PUT
    };

    private static routeDeleteMessagesEvent: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeStartStream: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeStopStream: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeCancelEvent: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeSetState: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeGetState: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeIncrementStateBy: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeDecrementStateBy: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeStartBroadcasting: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeStopBroadcasting: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeStartRecording: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeStopRecording: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeListWidgets: Route = { 
        route : "/events/{id}/getWidgets",
        method : RequestTypes.DELETE
    };

    private static routeAddWidget: Route = { 
        route : "/events/{id}/addWidget",
        method : RequestTypes.DELETE
    };

    private static routeUpdateWidget: Route = { 
        route : "/events/{id}/updateWidget/{subid}",
        method : RequestTypes.POST
    };

    private static routeRemoveWidget: Route = { 
        route : "/events/{id}/removeWidget",
        method : RequestTypes.DELETE
    };

    private static routeSetOptionsWidget: Route = { 
        route : "/events/{id}/setWidgetPositioningOptions/{subid}",
        method : RequestTypes.POST
    };

    private static routeGetOptionsWidget: Route = { 
        route : "/events/{id}/getWidgetPositioningOptions",
        method : RequestTypes.GET
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

    public static getChatMessages(event_id : string, query? : object | null, options? : object | null) {
        let route = this.routeGetMessagesEvent.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    }

    public static getSingleChatMessage(event_id : string, message_id : string, query? : object | null, options? : object | null) {
        let route = this.routeGetMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);

        return Requests.get(route, query, options);
    }
    
    public static sendChatMessage(event_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeSendMessageEvent.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    }

    public static updateChatMessage(event_id : string, message_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);

        return Requests.put(route, data, query, options);
    }

    public static deleteChatMessage(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) {
        let route = this.routeDeleteMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);

        return Requests.delete(route, data, query, options);
    }

    public static getWidgets(event_id : string, query? : object | null, options? : object | null) {
        let route = this.routeListWidgets.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    }

    public static addWidget(event_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeAddWidget.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    }

    public static updateWidget(event_id : string, widget_id : string,  data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.post(route, data, query, options);
    }

    public static deleteWidget(event_id : string, widget_id : string,  data : object, query? : object | null, options? : object | null) {
        let route = this.routeRemoveWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.delete(route, data, query, options);
    }

    public static setWidgetPositioningOption(event_id : string, option_id : string,  data : object, query? : object | null, options? : object | null) {
        let route = this.routeSetOptionsWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', option_id);

        return Requests.post(route, data, query, options);
    }

    public static getWidgetPositioningOption(event_id : string,  query? : object | null, options? : object | null) {
        let route = this.routeGetOptionsWidget.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }
    

    

}

export default Events;