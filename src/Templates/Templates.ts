import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Templates {

    private static routeCreateTemplate: Route = { 
        route : "/templates",
        method : RequestTypes.POST
    };

    private static routeUpdateTemplate: Route = { 
        route : "/templates/{id}",
        method : RequestTypes.PUT
    };

    private static routeUpdateTemplateDesign: Route = { 
        route : "/templates/{id}",
        method : RequestTypes.PUT
    };

    private static routeViewTemplate: Route = { 
        route : "/templates/{id}",
        method : RequestTypes.GET
    };

    private static routeListTemplate: Route = { 
        route : "/templates",
        method : RequestTypes.GET
    };

    private static routeDeleteTemplate: Route = { 
        route : "/templates/{id}",
        method : RequestTypes.DELETE
    };

    private static routeTemplateAddWidget: Route = { 
        route : "/templates/{id}/addWidget",
        method : RequestTypes.POST
    };

    private static routeTemplateGetWidgets: Route = { 
        route : "/templates/{id}/getWidgets",
        method : RequestTypes.GET
    };

    private static routeTemplateRemoveWidget: Route = { 
        route : "/templates/{id}/removeWidget",
        method : RequestTypes.DELETE
    };

    private static routeTemplateUpdateWidget: Route = { 
        route : "/templates/{id}/updateWidget/{subid}",
        method : RequestTypes.PUT
    };

    private static routeTemplateSetWidgetPositioningOptions: Route = { 
        route : "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method : RequestTypes.POST
    };

    private static routeTemplateSeMainImage: Route = { 
        route : "/templates/{id}/uploadTemplateImage",
        method : RequestTypes.POST
    };

    private static routeTemplateSetWatermarkImage: Route = { 
        route : "/templates/{id}/uploadTemplateWatermarkImage",
        method : RequestTypes.POST
    };

    private static routeTemplateSetOverlayImage: Route = { 
        route : "/templates/{id}/uploadTemplateOverlayImage",
        method : RequestTypes.POST
    };

    private static routeTemplateSetBackgroundImage: Route = { 
        route : "/templates/{id}/setBackgroundImage",
        method : RequestTypes.POST
    };

    private static routeListWidgets: Route = { 
        route : "/templates/{id}/getWidgets",
        method : RequestTypes.DELETE
    };

    private static routeAddWidget: Route = { 
        route : "/templates/{id}/addWidget",
        method : RequestTypes.DELETE
    };

    private static routeUpdateWidget: Route = { 
        route : "/templates/{id}/updateWidget/{subid}",
        method : RequestTypes.POST
    };

    private static routeRemoveWidget: Route = { 
        route : "/templates/{id}/removeWidget/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeSetOptionsWidget: Route = { 
        route : "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method : RequestTypes.POST
    };

    private static routeGetOptionsWidget: Route = { 
        route : "/templates/{id}/getWidgetPositioningOptions",
        method : RequestTypes.GET
    };

    private static routeSaveEventToTemplate: Route = { 
        route : "/templates/{id}/saveEventToTemplate",
        method : RequestTypes.POST
    };




    public static getTemplates(query? : object | null, options? : object | null) {
        return Requests.get(this.routeListTemplate.route, query);
    }

    public static createTemplate(data : object, query? : object | null, options? : object | null) {
        return Requests.post(this.routeCreateTemplate.route, data, query, options);
    }

    public static viewTemplate(template_id : string, query? : object | null, options? : object | null) {
        let route = this.routeViewTemplate.route.replaceAll('{id}', template_id);
        return Requests.get(route, query, options);
    }

    public static updateTemplate(template_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateTemplate.route.replaceAll('{id}', template_id);
        return Requests.put(route, data, query, options);
    }

    public static updateTemplateDesign(template_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateTemplateDesign.route.replaceAll('{id}', template_id);
        return Requests.put(route, data, query, options);
    }

    public static deleteTemplate(template_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteTemplate.route.replaceAll('{id}', template_id);
        return Requests.delete(route, data, query, options);
    }

    public static getWidgets(template_id : string, query? : object | null, options? : object | null) {
        let route = this.routeListWidgets.route.replaceAll('{id}', template_id);
        return Requests.get(route, query, options);
    }

    public static addWidget(template_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeAddWidget.route.replaceAll('{id}', template_id);
        return Requests.post(route, data, query, options);
    }

    public static updateWidget(template_id : string, widget_id : string,  data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.post(route, data, query, options);
    }

    public static deleteWidget(template_id : string, widget_id : string,  data? : object | null, query? : object | null, options? : object | null) {
        let route = this.routeRemoveWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.delete(route, data, query, options);
    }

    public static setWidgetPositioningOption(template_id : string, option_id : string,  data : object, query? : object | null, options? : object | null) {
        let route = this.routeSetOptionsWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', option_id);

        return Requests.post(route, data, query, options);
    }

    public static getWidgetPositioningOption(template_id : string,  query? : object | null, options? : object | null) {
        let route = this.routeGetOptionsWidget.route.replaceAll('{id}', template_id);

        return Requests.get(route, query, options);
    }

    public static saveEventToTemplate(template_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeSaveEventToTemplate.route.replaceAll('{id}', template_id);
        return Requests.post(route, data, query, options);
    }

}

export default Templates;