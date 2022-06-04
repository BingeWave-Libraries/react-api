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
export default Templates;
