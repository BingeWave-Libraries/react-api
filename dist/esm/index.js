var Config = /** @class */ (function () {
    function Config() {
    }
    var _a;
    _a = Config;
    Config.authToken = '';
    Config.setAuthToken = function (token) {
        _a.authToken = token;
    };
    Config.getAuthToken = function () {
        return _a.authToken;
    };
    return Config;
}());

var RequestTypes = /** @class */ (function () {
    function RequestTypes() {
    }
    RequestTypes.GET = "GET";
    RequestTypes.POST = "POST";
    RequestTypes.PUT = "PUT";
    RequestTypes.DELETE = "DELETE";
    return RequestTypes;
}());

var Requests = /** @class */ (function () {
    function Requests() {
    }
    var _a;
    _a = Requests;
    Requests.post = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.POST, data);
    };
    Requests.put = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.PUT, data);
    };
    Requests.get = function (url, query, options) {
        return _a._sendRequest(url, RequestTypes.GET, {});
    };
    Requests.delete = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.DELETE, data);
    };
    Requests.upload = function (filename, file, url, data, query, options) {
        var formData = new FormData();
        formData.append(filename, file);
        Object.keys(data).forEach(function (key) { return formData.append(key, data[key]); });
        return _a._sendRequest(url, RequestTypes.POST, formData, query, options);
    };
    Requests._sendRequest = function (url, method, data, query, options) {
        var queryParameters = '';
        if (query) {
            queryParameters = "?" + _a.toQueryString(query);
        }
        var body = null;
        if (data instanceof FormData) {
            body = data;
        }
        else if (typeof data === 'object' && data !== null) {
            body = JSON.stringify(data);
        }
        var route = "https://bw.bingewave.com/" + url + queryParameters;
        var config = {
            // learn more about this API here: https://graphql-pokemon2.vercel.app/
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config.getAuthToken(),
            }
        };
        if (body) {
            config['body'] = body;
        }
        return window.fetch(route, config).then(function (res) {
            return res.json();
        });
    };
    Requests.toQueryString = function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    };
    return Requests;
}());

var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.login = function (data) {
        return Requests.post(this.routeLogin.route, data);
    };
    Auth.register = function (data) {
        return Requests.post(this.routeRegister.route, data);
    };
    Auth.routeLogin = {
        route: "/auth/login",
        method: RequestTypes.POST
    };
    Auth.routeRegister = {
        route: "/auth/register",
        method: RequestTypes.POST
    };
    Auth.routeForgotPassword = {
        route: "/auth/forgotpassword",
        method: RequestTypes.POST
    };
    Auth.routeLoginToOrganizer = {
        route: "/auth/loginToOrganizer",
        method: RequestTypes.POST
    };
    Auth.routeRegisterToOrganizer = {
        route: "/registerToOrganizer",
        method: RequestTypes.POST
    };
    return Auth;
}());

var Events = /** @class */ (function () {
    function Events() {
    }
    Events.createEvent = function (data) {
        return Requests.post(this.routeCreateEvent.route, data);
    };
    Events.viewEvent = function (id, data) {
        var route = this.routeViewEvent.route.replaceAll('{id}', id);
        return Requests.get(route, data);
    };
    Events.updateEvent = function (id, data) {
        var route = this.routeUpdateEvent.route.replaceAll('{id}', id);
        return Requests.put(route, data);
    };
    Events.updateEventDesign = function (id, data) {
        var route = this.routeUpdateEventDesign.route.replaceAll('{id}', id);
        return Requests.put(route, data);
    };
    Events.deleteEvent = function (id, data) {
        var route = this.routeDeleteEvent.route.replaceAll('{id}', id);
        return Requests.delete(route, data);
    };
    Events.routeCreateEvent = {
        route: "/events",
        method: RequestTypes.POST
    };
    Events.routeListEvents = {
        route: "/events",
        method: RequestTypes.GET
    };
    Events.routeUpdateEvent = {
        route: "/events/{id}/design",
        method: RequestTypes.PUT
    };
    Events.routeUpdateEventDesign = {
        route: "/events/{id}",
        method: RequestTypes.PUT
    };
    Events.routeViewEvent = {
        route: "/events/{id}",
        method: RequestTypes.GET
    };
    Events.routeDeleteEvent = {
        route: "/events/{id}",
        method: RequestTypes.DELETE
    };
    return Events;
}());

var Templates = /** @class */ (function () {
    function Templates() {
    }
    Templates.getTemplates = function (query) {
        return Requests.get(this.routeListTemplate.route, query);
    };
    Templates.createTemplate = function (data) {
        return Requests.post(this.routeCreateTemplate.route, data);
    };
    Templates.viewTemplate = function (id, data) {
        var route = this.routeViewTemplate.route.replaceAll('{id}', id);
        return Requests.get(route, data);
    };
    Templates.updateTemplate = function (id, data) {
        var route = this.routeUpdateTemplate.route.replaceAll('{id}', id);
        return Requests.put(route, data);
    };
    Templates.updateTemplateDesign = function (id, data) {
        var route = this.routeUpdateTemplateDesign.route.replaceAll('{id}', id);
        return Requests.put(route, data);
    };
    Templates.deleteTemplate = function (id, data) {
        var route = this.routeDeleteTemplate.route.replaceAll('{id}', id);
        return Requests.delete(route, data);
    };
    Templates.addWidgetToTemplate = function (id, data) {
        var route = this.routeTemplateAddWidget.replaceAll('{id}', id);
        return Requests.post(route, data);
    };
    Templates.updateAssociatedWidget = function (template_id, widget_id, data) {
        var route = this.routeTemplateUpdateWidget.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.put(route, data);
    };
    Templates.setWidgetPositioningOptions = function (template_id, widget_id, data) {
        var route = this.routeTemplateSetWidgetPositioningOptions.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.put(route, data);
    };
    Templates.routeCreateTemplate = {
        route: "/templates",
        method: RequestTypes.POST
    };
    Templates.routeUpdateTemplate = {
        route: "/templates/{id}",
        method: RequestTypes.PUT
    };
    Templates.routeUpdateTemplateDesign = {
        route: "/templates/{id}",
        method: RequestTypes.PUT
    };
    Templates.routeViewTemplate = {
        route: "/templates/{id}",
        method: RequestTypes.GET
    };
    Templates.routeListTemplate = {
        route: "/templates",
        method: RequestTypes.GET
    };
    Templates.routeDeleteTemplate = {
        route: "/templates/{id}",
        method: RequestTypes.DELETE
    };
    Templates.routeTemplateAddWidget = {
        route: "/templates/{id}/addWidget",
        method: RequestTypes.POST
    };
    Templates.routeTemplateGetWidgets = {
        route: "/templates/{id}/getWidgets",
        method: RequestTypes.GET
    };
    Templates.routeTemplateRemoveWidget = {
        route: "/templates/{id}/removeWidget",
        method: RequestTypes.DELETE
    };
    Templates.routeTemplateUpdateWidget = {
        route: "/templates/{id}/updateWidget/{subid}",
        method: RequestTypes.PUT
    };
    Templates.routeTemplateSetWidgetPositioningOptions = {
        route: "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSeMainImage = {
        route: "/templates/{id}/uploadTemplateImage",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSetWatermarkImage = {
        route: "/templates/{id}/uploadTemplateWatermarkImage",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSetOverlayImage = {
        route: "/templates/{id}/uploadTemplateOverlayImage",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSetBackgroundImage = {
        route: "/templates/{id}/setBackgroundImage",
        method: RequestTypes.POST
    };
    return Templates;
}());

export { Auth, Config, Events, Templates };
//# sourceMappingURL=index.js.map
