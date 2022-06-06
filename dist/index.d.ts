declare class Auth {
    private static routeLogin;
    private static routeRegister;
    private static routeForgotPassword;
    private static routeLoginToOrganizer;
    private static routeRegisterToOrganizer;
    static login(data: object, query?: object | null, options?: object | null): Promise<any>;
    static register(data: object, query?: object | null, options?: object | null): Promise<any>;
}

declare class Events {
    private static routeCreateEvent;
    private static routeListEvents;
    private static routeUpdateEvent;
    private static routeUpdateEventDesign;
    private static routeViewEvent;
    private static routeDeleteEvent;
    static createEvent(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewEvent(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static getEvents(query?: object | null, options?: object | null): Promise<any>;
    static updateEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateEventDesign(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}

declare class Config {
    private static authToken;
    static setAuthToken: (token: string) => void;
    static getAuthToken: () => string;
}

declare class Organizers {
    private static routeListOrganizers;
    private static routeCreateOrganizer;
    private static routeViewOrganizer;
    private static routeUpdateOrganizer;
    private static routeDeleterOrganizer;
    private static routeSetUserToRoleWithOganizer;
    private static routeRemoveUserFromRoleWithOganizer;
    static createOrganizer(data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateOrganizer(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewOrganizer(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
    static deleteOrganizer(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setUserToRole(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static removeUserFromRole(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}

declare class Templates {
    private static routeCreateTemplate;
    private static routeUpdateTemplate;
    private static routeUpdateTemplateDesign;
    private static routeViewTemplate;
    private static routeListTemplate;
    private static routeDeleteTemplate;
    private static routeTemplateAddWidget;
    private static routeTemplateGetWidgets;
    private static routeTemplateRemoveWidget;
    private static routeTemplateUpdateWidget;
    private static routeTemplateSetWidgetPositioningOptions;
    private static routeTemplateSeMainImage;
    private static routeTemplateSetWatermarkImage;
    private static routeTemplateSetOverlayImage;
    private static routeTemplateSetBackgroundImage;
    static getTemplates(query?: object | null, options?: object | null): Promise<any>;
    static createTemplate(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewTemplate(template_id: string, query?: object | null, options?: object | null): Promise<any>;
    static updateTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateTemplateDesign(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static addWidgetToTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateAssociatedWidget(template_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setWidgetPositioningOptions(template_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}

declare class Widgets {
    private static routeCreateWidget;
    private static routeListWidget;
    private static routeUpdateWidget;
    private static routeViewWidget;
    private static routeDeleteWidget;
    private static routeSetMainImage;
    private static routeSetRemoveImage;
    private static routesetRemoveImage;
    static createWidget(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewWidget(widget_id: string, query?: object | null, options?: object | null): Promise<any>;
    static getWidgets(query?: object | null, options?: object | null): Promise<any>;
    static updateWidget(widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteWidget(widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}

declare class BWAPI {
    static Auth: Auth;
    static Config: Config;
    static Events: Events;
    static Organizers: Organizers;
    static Templates: Templates;
    static Widgets: Widgets;
}

export { Auth, BWAPI, Config, Events, Organizers, Templates };
