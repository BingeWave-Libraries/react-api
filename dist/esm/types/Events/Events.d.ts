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
export default Events;
