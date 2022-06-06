import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Widgets {

    private static routeCreateWidget: Route = { 
        route : "/widgets",
        method : RequestTypes.POST
    };

    private static routeListWidget: Route = { 
        route : "/widgets",
        method : RequestTypes.GET
    }

    private static routeUpdateWidget: Route = { 
        route : "/widgets/{id}",
        method : RequestTypes.PUT
    }

    private static routeViewWidget: Route = { 
        route : "/widgets/{id}",
        method : RequestTypes.GET
    }

    private static routeDeleteWidget: Route = { 
        route : "/widgets/{id}",
        method : RequestTypes.DELETE
    }

    private static routeSetMainImage: Route = { 
        route : "/widgets/{id}/setMainImage",
        method : RequestTypes.DELETE
    }

    private static routeSetRemoveImage: Route = { 
        route : "/widgets/{id}/removeMainImage",
        method : RequestTypes.DELETE
    }

    private static routesetRemoveImage: Route = { 
        route : "/widgets/{id}/removeMainImage",
        method : RequestTypes.DELETE
    }

    public static createWidget(data : object, query? : object | null, options? : object | null) {
        return Requests.post(this.routeCreateWidget.route, data, query, options);
    }

    public static viewWidget(widget_id : string, query? : object | null, options? : object | null) {
        let route = this.routeViewWidget.route.replaceAll('{id}', widget_id);
        return Requests.get(route, query, options);
    }

    public static getWidgets(query? : object | null, options? : object | null) {
        return Requests.get(this.routeListWidget.route, query, options);
    }

    public static updateWidget(widget_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateWidget.route.replaceAll('{id}', widget_id);
        return Requests.put(route, data, query, options);
    }


    public static deleteWidget(widget_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteWidget.route.replaceAll('{id}', widget_id);
        return Requests.delete(route, data, query, options);
    }
}

export default Widgets;