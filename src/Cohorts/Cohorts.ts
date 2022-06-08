import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";


class Cohorts {

    private static routeCreateCohort : Route = {
        route: "/cohorts",
        method: RequestTypes.POST
    }

    public static createCohort(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeCreateCohort.route, data, query, options);
    }

}