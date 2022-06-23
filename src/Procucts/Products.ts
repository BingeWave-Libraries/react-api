import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Products{

    private static routeListProducts: Route = { 
        route : "/products",
        method : RequestTypes.GET
    };

    private static routeCreateProducts: Route = { 
        route : "/products",
        method : RequestTypes.POST
    };

    private static routeViewProducts: Route = { 
        route : "/products/{id}",
        method : RequestTypes.GET
    };

    private static routeUpdateProducts : Route = {
        route: "/products/{id}",
        method: RequestTypes.PUT
    }

    private static routeAddImage : Route = {
        route : "/products/{id}/images",
        method : RequestTypes.POST
    }

    private static routeDefaultImage : Route = {
        route : "/products/{product_id}/images/{image_id}/makeDefault",
        method : RequestTypes.POST
    }

    private static routeDeleteImage : Route = {
        route : "/products/{product_id}/images/{image_id}",
        method : RequestTypes.DELETE
    }

    public static ListProducts(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeListProducts.route, data, query, options);
    }

    public static createProducts(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeCreateProducts.route, data, query, options);
    }

    public static viewProducts(product_id : string, query? : object | null, options? : object | null) {
        let route = this.routeViewProducts.route.replaceAll('{id}', product_id);
        return Requests.get(route, query, options);
    }

    public static updateProducts(product_id: string, data: object, query?: object | null, options?: object | null){
        let route = this.routeUpdateProducts.route.replaceAll('{id}', product_id);
	return Requests.put(route, data, query, options);
    }

    public static uploadImage(image_id: string, file: any, url :string, data : AnyObject, query? : object | null, options? : object | null){
        let route = this.routeAddImage.route.replaceAll('{id}', image_id)
        return Requests.upload(image_id, route, data, query, options);
    }

    public static defaultImage(image_id : string, data: object, query? : object | null, options? : object | null){
        let route = this.routeDefaultImage.route.replaceAll('{id}', image_id)

        return Requests.post(this.routeDefaultImage.route, data, query, options);
    }

    public static deleteImage(event_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteImage.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    }


}
export default Products;