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
export default Events;
