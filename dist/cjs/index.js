'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
        return _a._sendRequest(url, RequestTypes.POST, data, query, options);
    };
    Requests.put = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.PUT, data, query, options);
    };
    Requests.get = function (url, query, options) {
        return _a._sendRequest(url, RequestTypes.GET, null, query, options);
    };
    Requests.delete = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.DELETE, data, query, options);
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
        if (data instanceof FormData && data !== null) {
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
    Auth.login = function (data, query, options) {
        return Requests.post(this.routeLogin.route, data, query, options);
    };
    Auth.register = function (data, query, options) {
        return Requests.post(this.routeRegister.route, data, query, options);
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
    Events.createEvent = function (data, query, options) {
        return Requests.post(this.routeCreateEvent.route, data, query, options);
    };
    Events.viewEvent = function (event_id, query, options) {
        var route = this.routeViewEvent.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.getEvents = function (query, options) {
        return Requests.get(this.routeViewEvent.route, query, options);
    };
    Events.updateEvent = function (event_id, data, query, options) {
        var route = this.routeUpdateEvent.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    };
    Events.updateEventDesign = function (event_id, data, query, options) {
        var route = this.routeUpdateEventDesign.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    };
    Events.deleteEvent = function (event_id, data, query, options) {
        var route = this.routeDeleteEvent.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
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

var Organizers = /** @class */ (function () {
    function Organizers() {
    }
    Organizers.createOrganizer = function (data, query, options) {
        return Requests.post(this.routeCreateOrganizer.route, data, query, options);
    };
    Organizers.updateOrganizer = function (organizer_id, data, query, options) {
        var route = this.routeUpdateOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.put(route, data, query, options);
    };
    Organizers.viewOrganizer = function (organizer_id, query, options) {
        var route = this.routeViewOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.get(route, query, options);
    };
    Organizers.deleteOrganizer = function (organizer_id, data, query, options) {
        var route = this.routeDeleterOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.delete(route, data, query, options);
    };
    Organizers.setUserToRole = function (organizer_id, data, query, options) {
        var route = this.routeSetUserToRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    };
    Organizers.removeUserFromRole = function (organizer_id, data, query, options) {
        var route = this.routeRemoveUserFromRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    };
    Organizers.routeListOrganizers = {
        route: "/organizers",
        method: RequestTypes.GET
    };
    Organizers.routeCreateOrganizer = {
        route: "/organizers",
        method: RequestTypes.POST
    };
    Organizers.routeViewOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes.GET
    };
    Organizers.routeUpdateOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes.PUT
    };
    Organizers.routeDeleterOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes.DELETE
    };
    Organizers.routeSetUserToRoleWithOganizer = {
        route: "/organizers/{id}/setUserToRole",
        method: RequestTypes.POST
    };
    Organizers.routeRemoveUserFromRoleWithOganizer = {
        route: "/organizers/{id}/removeUserFromRole",
        method: RequestTypes.POST
    };
    return Organizers;
}());

var Templates = /** @class */ (function () {
    function Templates() {
    }
    Templates.getTemplates = function (query, options) {
        return Requests.get(this.routeListTemplate.route, query);
    };
    Templates.createTemplate = function (data, query, options) {
        return Requests.post(this.routeCreateTemplate.route, data, query, options);
    };
    Templates.viewTemplate = function (template_id, query, options) {
        var route = this.routeViewTemplate.route.replaceAll('{id}', template_id);
        return Requests.get(route, query, options);
    };
    Templates.updateTemplate = function (template_id, data, query, options) {
        var route = this.routeUpdateTemplate.route.replaceAll('{id}', template_id);
        return Requests.put(route, data, query, options);
    };
    Templates.updateTemplateDesign = function (template_id, data, query, options) {
        var route = this.routeUpdateTemplateDesign.route.replaceAll('{id}', template_id);
        return Requests.put(route, data, query, options);
    };
    Templates.deleteTemplate = function (template_id, data, query, options) {
        var route = this.routeDeleteTemplate.route.replaceAll('{id}', template_id);
        return Requests.delete(route, data, query, options);
    };
    Templates.addWidgetToTemplate = function (template_id, data, query, options) {
        var route = this.routeTemplateAddWidget.route.replaceAll('{id}', template_id);
        return Requests.post(route, data, query, options);
    };
    Templates.updateAssociatedWidget = function (template_id, widget_id, data, query, options) {
        var route = this.routeTemplateUpdateWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.put(route, data, query, options);
    };
    Templates.setWidgetPositioningOptions = function (template_id, widget_id, data, query, options) {
        var route = this.routeTemplateSetWidgetPositioningOptions.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.put(route, data, query, options);
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

var Widgets = /** @class */ (function () {
    function Widgets() {
    }
    Widgets.createWidget = function (data, query, options) {
        return Requests.post(this.routeCreateWidget.route, data, query, options);
    };
    Widgets.viewWidget = function (widget_id, query, options) {
        var route = this.routeViewWidget.route.replaceAll('{id}', widget_id);
        return Requests.get(route, query, options);
    };
    Widgets.getWidgets = function (query, options) {
        return Requests.get(this.routeListWidget.route, query, options);
    };
    Widgets.updateWidget = function (widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', widget_id);
        return Requests.put(route, data, query, options);
    };
    Widgets.deleteWidget = function (widget_id, data, query, options) {
        var route = this.routeDeleteWidget.route.replaceAll('{id}', widget_id);
        return Requests.delete(route, data, query, options);
    };
    Widgets.routeCreateWidget = {
        route: "/widgets",
        method: RequestTypes.POST
    };
    Widgets.routeListWidget = {
        route: "/widgets",
        method: RequestTypes.GET
    };
    Widgets.routeUpdateWidget = {
        route: "/widgets/{id}",
        method: RequestTypes.PUT
    };
    Widgets.routeViewWidget = {
        route: "/widgets/{id}",
        method: RequestTypes.GET
    };
    Widgets.routeDeleteWidget = {
        route: "/widgets/{id}",
        method: RequestTypes.DELETE
    };
    Widgets.routeSetMainImage = {
        route: "/widgets/{id}/setMainImage",
        method: RequestTypes.DELETE
    };
    Widgets.routeSetRemoveImage = {
        route: "/widgets/{id}/removeMainImage",
        method: RequestTypes.DELETE
    };
    Widgets.routesetRemoveImage = {
        route: "/widgets/{id}/removeMainImage",
        method: RequestTypes.DELETE
    };
    return Widgets;
}());

var BWAPI = /** @class */ (function () {
    function BWAPI() {
    }
    BWAPI.Auth = Auth;
    BWAPI.Config = Config;
    BWAPI.Events = Events;
    BWAPI.Organizers = Organizers;
    BWAPI.Templates = Templates;
    BWAPI.Widgets = Widgets;
    return BWAPI;
}());

exports.Auth = Auth;
exports.BWAPI = BWAPI;
exports.Config = Config;
exports.Events = Events;
exports.Organizers = Organizers;
exports.Templates = Templates;
//# sourceMappingURL=index.js.map
