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
export default Templates;
