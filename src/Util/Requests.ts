import Config from "../Config/Config";
import RequestTypes from "./RequestTypes"

class Requests {

    public static post = (url :string, data : object, query? : object | null, options? : object | null) => {
        return this._sendRequest(url, RequestTypes.POST, data);
    }

    public static put = (url :string, data : object, query? : object | null, options? : object | null) => {
        return this._sendRequest(url, RequestTypes.POST, data);
    }

    public static get = (url :string, query? : object | null, options? : object | null) => {
        return this._sendRequest(url, RequestTypes.POST, {});
    }

    public static delete = (url :string, data : object, query? : object | null, options? : object | null) => {
        return this._sendRequest(url, RequestTypes.POST, data);
    }

    private static _sendRequest = (url : string, method : string, data? : object, query? : object | null, options? : object | null) => {

        let queryParameters = '';

        if(query){
            queryParameters = "?" + this.toQueryString(query);
        }

        let route = "https://bw.bingewave.com/" + url + queryParameters;

        return window.fetch(route, {
            // learn more about this API here: https://graphql-pokemon2.vercel.app/
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config.getAuthToken(),
            },
            body: JSON.stringify(data),
        }).then(function (res) {
            return res.json();
        });
    }

    private static toQueryString = (obj : object) => {
        var str = [];
        for (var p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
      }

}

export default Requests;