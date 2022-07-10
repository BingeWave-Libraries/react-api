import AnyObject from "../Util/Interfaces/AnyObject";
import Route from "../Util/Interfaces/Route";
declare class Videos {
    private static routeCreateVideo;
    static routeUpdateVideo: Route;
    private static routeListVideo;
    private static routeViewVideo;
    private static routeDeleteVideo;
    private static routeMainVideo;
    private static routeUploadMainVideo;
    private static routePreviewVideo;
    private static routeSetMainImage;
    static createVideo(data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateVideo(video_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static listVideos(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewVideo(video_id: string, query?: object | null, options?: object | null): Promise<any>;
    static deleteVideo(video_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static uploadMainVideo(filename: string, file: any, video_id: string, data: AnyObject, query?: AnyObject | null, options?: object | null): Promise<any>;
    static uploadPreviewVideo(video_id: string, filename: string, file: any, data: object, query?: object | null, options?: object | null): Promise<any>;
    static uploadImage(video_id: string, filename: string, file: any, data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Videos;
