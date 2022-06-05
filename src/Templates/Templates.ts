import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Templates {

    private static routeCreateTemplate: object = { 
        route : "/templates",
        method : RequestTypes.POST
    };

    private static routeUpdateTemplate: object = { 
        route : "/templates/{id}",
        method : RequestTypes.PUT
    };

    private static routeUpdateTemplateDesign: object = { 
        route : "/templates/{id}",
        method : RequestTypes.PUT
    };

    private static routeViewTemplate: object = { 
        route : "/templates/{id}",
        method : RequestTypes.GET
    };

    private static routeListTemplate: object = { 
        route : "/templates",
        method : RequestTypes.GET
    };

    private static routeDeleteTemplate: object = { 
        route : "/templates/{id}",
        method : RequestTypes.DELETE
    };

    private static routeTemplateAddWidget: object = { 
        route : "/templates/{id}/addWidget",
        method : RequestTypes.POST
    };

    private static routeTemplateGetWidgets: object = { 
        route : "/templates/{id}/getWidgets",
        method : RequestTypes.GET
    };

    private static routeTemplateRemoveWidget: object = { 
        route : "/templates/{id}/removeWidget",
        method : RequestTypes.DELETE
    };

    private static routeTemplateUpdateWidget: object = { 
        route : "/templates/{id}/updateWidget/{subid}",
        method : RequestTypes.PUT
    };

    private static routeTemplateSetWidgetPositioningOptions: object = { 
        route : "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method : RequestTypes.POST
    };

    private static routeTemplateSeMainImage: object = { 
        route : "/templates/{id}/uploadTemplateImage",
        method : RequestTypes.POST
    };

    private static routeTemplateSetWatermarkImage: object = { 
        route : "/templates/{id}/uploadTemplateWatermarkImage",
        method : RequestTypes.POST
    };

    private static routeTemplateSetOverlayImage: object = { 
        route : "/templates/{id}/uploadTemplateOverlayImage",
        method : RequestTypes.POST
    };

    private static routeTemplateSetBackgroundImage: object = { 
        route : "/templates/{id}/setBackgroundImage",
        method : RequestTypes.POST
    };


    public static getTemplates(query? : object | null) {
        return Requests.get(this.routeListTemplate.route, query);
    }

    public static createTemplate(data : object) {
        return Requests.post(this.routeCreateTemplate.route, data);
    }

    public static viewTemplate(id : string, data : object) {
        let route = this.routeViewTemplate.route.replaceAll('{id}', id);
        return Requests.get(route, data);
    }

    public static updateTemplate(id : string, data : object) {
        let route = this.routeUpdateTemplate.route.replaceAll('{id}', id);
        return Requests.put(route, data);
    }

    public static updateTemplateDesign(id : string, data : object) {
        let route = this.routeUpdateTemplateDesign.route.replaceAll('{id}', id);
        return Requests.put(route, data);
    }

    public static deleteTemplate(id : string, data : object) {
        let route = this.routeDeleteTemplate.route.replaceAll('{id}', id);
        return Requests.delete(route, data);
    }

    public static addWidgetToTemplate(id : string, data : object) {
        let route = this.routeTemplateAddWidget.replaceAll('{id}', id);
        return Requests.post(route, data);
    }

    public static updateAssociatedWidget(template_id : string, widget_id : string, data : object) {
        let route = this.routeTemplateUpdateWidget.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.put(route, data);
    }

    public static setWidgetPositioningOptions(template_id : string, widget_id : string, data : object) {
        let route = this.routeTemplateSetWidgetPositioningOptions.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.put(route, data);
    }

}

export default Templates;