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

    public static getTemplates(data : object, query? : object | null) {
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
        return Requests.get(route, data);
    }

}

export default Templates;