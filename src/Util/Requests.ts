import Config from "../Config/Config";
import AnyObject from "./Interfaces/AnyObject";
import RequestTypes from "./RequestTypes"

class Requests {

    public static post = (url :string, data : object, query? : object | null, options? : object | null) => {
        return this._sendRequest(url, RequestTypes.POST, data, query, options);
    }

    public static put = (url :string, data : object, query? : object | null, options? : object | null) => {
        return this._sendRequest(url, RequestTypes.PUT, data, query, options);
    }

    public static get = (url :string, query? : object | null, options? : object | null) => {
        return this._sendRequest(url, RequestTypes.GET, null, query, options);
    }

    public static delete = (url :string, data? : object | null, query? : object | null, options? : object | null) => {
        return this._sendRequest(url, RequestTypes.DELETE, data, query, options);
    }

    public static upload = (filename: string, file: any, url :string, data : AnyObject, query? : object | null, options? : object | null) => {

        const formData = new FormData();

        formData.append(filename, file)

        Object.keys(data).forEach(key => formData.append(key, data[key]));
  
        return this._sendRequest(url, RequestTypes.POST, formData, query, options);
    }

    private static _sendRequest = (url : string, method : string, data? : object | null, query? : object | null, options? : object | null) => {

        let queryParameters = '';

        if(query){
            queryParameters = "?" + this.toQueryString(query);
        }

        let body = null;

        if(data instanceof FormData && data !== null) {
            body = data;
        } else if(typeof data === 'object' && data !== null) {
            body =  JSON.stringify(data);
        }

        let route = "https://bw.bingewave.com/" + url + queryParameters;

        let config : AnyObject = {
            // learn more about this API here: https://graphql-pokemon2.vercel.app/
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config.getAuthToken(),
            }
        }

        if(body){
            config['body'] = body;
        }

        return window.fetch(route, config ).then(function (res) {
            return res.json();
        });
    }

    private static toQueryString = (obj : AnyObject) => {
        var str = [];
        for (var p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
      }

}

export default Requests;