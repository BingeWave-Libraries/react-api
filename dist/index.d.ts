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
    private static routeGetMessagesEvent;
    private static routeSendMessageEvent;
    private static routeViewMessagesEvent;
    private static routeUpdateMessagesEvent;
    private static routeDeleteMessagesEvent;
    private static routeStartStream;
    private static routeStopStream;
    private static routeCancelEvent;
    private static routeSetState;
    private static routeGetState;
    private static routeIncrementStateBy;
    private static routeDecrementStateBy;
    private static routeStartBroadcasting;
    private static routeStopBroadcasting;
    private static routeStartRecording;
    private static routeStopRecording;
    private static routeListWidgets;
    private static routeAddWidget;
    private static routeUpdateWidget;
    private static routeRemoveWidget;
    private static routeSetOptionsWidget;
    private static routeGetOptionsWidget;
    static createEvent(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewEvent(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static getEvents(query?: object | null, options?: object | null): Promise<any>;
    static updateEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateEventDesign(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getChatMessages(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static getSingleChatMessage(event_id: string, message_id: string, query?: object | null, options?: object | null): Promise<any>;
    static sendChatMessage(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateChatMessage(event_id: string, message_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteChatMessage(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
    static getWidgets(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static addWidget(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateWidget(event_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteWidget(event_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setWidgetPositioningOption(event_id: string, option_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getWidgetPositioningOption(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static startBroadcast(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static stopBroadcast(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static startRecording(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static stopRecording(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static startStreaming(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static stopStreaming(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static cancelEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setState(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getState(event_id: string, key: any, query?: object | null, options?: object | null): Promise<any>;
    static incrementStateBy(event_id: string, key: any, data: object, query?: object | null, options?: object | null): Promise<any>;
    static decrementStateBy(event_id: string, key: any, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static getOrganizers(query?: object | null, options?: object | null): Promise<any>;
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
    private static routeListWidgets;
    private static routeAddWidget;
    private static routeUpdateWidget;
    private static routeRemoveWidget;
    private static routeSetOptionsWidget;
    private static routeGetOptionsWidget;
    private static routeSaveEventToTemplate;
    static getTemplates(query?: object | null, options?: object | null): Promise<any>;
    static createTemplate(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewTemplate(template_id: string, query?: object | null, options?: object | null): Promise<any>;
    static updateTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateTemplateDesign(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getWidgets(template_id: string, query?: object | null, options?: object | null): Promise<any>;
    static addWidget(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateWidget(template_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteWidget(template_id: string, widget_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
    static setWidgetPositioningOption(template_id: string, option_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getWidgetPositioningOption(template_id: string, query?: object | null, options?: object | null): Promise<any>;
    static saveEventToTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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

interface AnyObject {
    [key: string]: any;
}

interface Route {
    route: string;
    method: string;
}

declare class Videos {
    private static routeCreateVideo;
    static routeUpdateVideo: Route;
    private static routeListVideo;
    private static routeViewVideo;
    private static routeDeleteVideo;
    private static routeMainVideo;
    private static routeUploadMainVideo;
    private static routePreviewVideo;
    private static routeSetMainImage;
    static createVideo(data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateVideo(video_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static listVideos(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewVideo(video_id: string, query?: object | null, options?: object | null): Promise<any>;
    static deleteVideo(video_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static uploadMainVideo(filename: string, file: any, video_id: string, data: AnyObject, query?: AnyObject | null, options?: object | null): Promise<any>;
    static uploadPreviewVideo(video_id: string, filename: string, file: any, data: object, query?: object | null, options?: object | null): Promise<any>;
    static uploadImage(video_id: string, filename: string, file: any, data: object, query?: object | null, options?: object | null): Promise<any>;
}

declare class Products {
    private static routeListProducts;
    private static routeCreateProducts;
    private static routeViewProducts;
    private static routeUpdateProducts;
    private static routeAddImage;
    private static routeDefaultImage;
    private static routeDeleteImage;
    static listProducts(query?: object | null, options?: object | null): Promise<any>;
    static createProducts(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewProducts(product_id: string, query?: object | null, options?: object | null): Promise<any>;
    static updateProducts(product_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static uploadImage(product_id: string, file: any, filename: string, data: AnyObject, query?: AnyObject | null, options?: object | null): Promise<any>;
    static defaultImage(product_id: string, image_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteImage(product_id: string, image_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}

declare class BWAPI {
    static Auth: Auth;
    static Config: Config;
    static Events: Events;
    static Organizers: Organizers;
    static Products: Products;
    static Templates: Templates;
    static Widgets: Widgets;
    static Videos: Videos;
}

export { Auth, BWAPI, Config, Events, Organizers, Products, Templates, Videos, Widgets };
