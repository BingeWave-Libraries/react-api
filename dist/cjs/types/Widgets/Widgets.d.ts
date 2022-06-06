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
export default Widgets;
