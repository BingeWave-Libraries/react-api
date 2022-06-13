import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Videos {

    private static routeCreateVideo : Route = {
        route: "/videos",
        method: RequestTypes.POST
    }

    public static routeUpdateVideo : Route = {
        route: "/videos/{id}",
        method: RequestTypes.PUT
    }

    private static routeListVideo : Route = {
        route: "/videos",
        method: RequestTypes.POST
    } 

    private static routeViewVideo: Route = { 
        route : "/videos/{id}",
        method : RequestTypes.GET
    };

    private static routeDeleteVideo: Route = { 
        route : "/videos/{id}",
        method : RequestTypes.DELETE
    };

    public static createVideo(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeCreateVideo.route, data, query, options);
    }

    public static updateVideo(video_id: string, data: object, query?: object | null, options?: object | null){
        let route = this.routeUpdateVideo.route.replaceAll('{id}', video_id);
	return Requests.put(route, data, query, options);
    }

    public static ListVideo(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeListVideo.route, data, query, options);
    }

    public static viewVideo(video_id : string, query? : object | null, options? : object | null) {
        let route = this.routeViewVideo.route.replaceAll('{id}', video_id);
        return Requests.get(route, query, options);
    }

    public static getVideo(query? : object | null, options? : object | null) {
        return Requests.get(this.routeViewVideo.route, query, options);
    }

    public static deleteVideo(video_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteVideo.route.replaceAll('{id}', video_id);
        return Requests.delete(route, data, query, options);
    }

}

export default Videos;