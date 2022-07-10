import Route from "../Util/Interfaces/Route";
declare class Cohorts {
    private static routeListCohort;
    private static routeCreateCohort;
    static routeUpdateCohort: Route;
    private static routeDeleteCohort;
    private static routeAddAccount;
    static routeRemoveAccount: Route;
    private static routeAddEvent;
    private static routeRemoveEvent;
    private static routeSetMainImage;
    static ListCohort(data: object, query?: object | null, options?: object | null): Promise<any>;
    static createCohort(data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateCohort(cohort_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteCohort(cohort_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static addAccount(data: object, query?: object | null, options?: object | null): Promise<any>;
    static removeAccount(account_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static addEvent(data: object, query?: object | null, options?: object | null): Promise<any>;
    static removeEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setImage(image_url: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Cohorts;
