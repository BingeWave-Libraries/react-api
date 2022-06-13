import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";


class Cohorts {

    private static routeListCohort : Route = {
        route: "/cohorts",
        method: RequestTypes.POST
    } 

    private static routeCreateCohort : Route = {
        route: "/cohorts",
        method: RequestTypes.POST
    }

    private static routeViewCohort: Route = { 
        route : "/cohorts/{id}",
        method : RequestTypes.GET
    };

    public static routeUpdateCohort : Route = {
        route: "/cohorts/{id}",
        method: RequestTypes.PUT
    }

    private static routeDeleteCohort: Route = { 
        route : "/cohorts/{id}",
        method : RequestTypes.DELETE
    };

    public static ListCohort(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeListCohort.route, data, query, options);
    }

    public static createCohort(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeCreateCohort.route, data, query, options);
    }

    public static viewCohort(cohort_id : string, query? : object | null, options? : object | null) {
        let route = this.routeViewCohort.route.replaceAll('{id}', cohort_id);
        return Requests.get(route, query, options);
    }

    public static getCohort(query? : object | null, options? : object | null) {
        return Requests.get(this.routeViewCohort.route, query, options);
    }

    public static updateCohort(cohort_id: string, data: object, query?: object | null, options?: object | null){
        let route = this.routeUpdateCohort.route.replaceAll('{id}', cohort_id);
	return Requests.put(route, data, query, options);
    }

    public static deleteCohort(cohort_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteCohort.route.replaceAll('{id}', cohort_id);
        return Requests.delete(route, data, query, options);
    }

}