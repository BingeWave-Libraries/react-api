import AnyObject from "../Util/Interfaces/AnyObject";
declare class Products {
    private static routeListProducts;
    private static routeCreateProducts;
    private static routeViewProducts;
    private static routeUpdateProducts;
    private static routeAddImage;
    private static routeDefaultImage;
    private static routeDeleteImage;
    static listProducts(data: object, query?: object | null, options?: object | null): Promise<any>;
    static createProducts(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewProducts(product_id: string, query?: object | null, options?: object | null): Promise<any>;
    static updateProducts(product_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static uploadImage(product_id: string, file: any, filename: string, data: AnyObject, query?: AnyObject | null, options?: object | null): Promise<any>;
    static defaultImage(product_id: string, image_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteImage(product_id: string, image_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Products;
