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
export default Organizers;
