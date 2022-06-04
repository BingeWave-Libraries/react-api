declare class Auth {
    private static routeLogin;
    private static routeRegister;
    private static routeForgotPassword;
    private static routeLoginToOrganizer;
    private static routeRegisterToOrganizer;
    static login(data: object): Promise<any>;
    static register(data: object): Promise<any>;
}

declare class Events {
    private static routeCreateEvent;
    private static routeListEvents;
    private static routeUpdateEvent;
    private static routeUpdateEventDesign;
    private static routeViewEvent;
    private static routeDeleteEvent;
    static createEvent(data: object): Promise<any>;
    static viewEvent(id: string, data: object): Promise<any>;
    static updateEvent(id: string, data: object): Promise<any>;
    static updateEventDesign(id: string, data: object): Promise<any>;
    static deleteEvent(id: string, data: object): Promise<any>;
}

declare class Config {
    private static authToken;
    static setAuthToken: (token: string) => void;
    static getAuthToken: () => string;
}

declare class Templates {
    private static routeCreateTemplate;
    private static routeUpdateTemplate;
    private static routeUpdateTemplateDesign;
    private static routeViewTemplate;
    private static routeListTemplate;
    private static routeDeleteTemplate;
    static getTemplates(data: object, query?: object | null): Promise<any>;
    static createTemplate(data: object): Promise<any>;
    static viewTemplate(id: string, data: object): Promise<any>;
    static updateTemplate(id: string, data: object): Promise<any>;
    static updateTemplateDesign(id: string, data: object): Promise<any>;
    static deleteTemplate(id: string, data: object): Promise<any>;
}

export { Auth, Config, Events, Templates };
