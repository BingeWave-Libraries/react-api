import Config from "../Config/Config";
import RequestTypes from "./RequestTypes"

class Requests {


    static post = (url, data) => {
        return this._sendRequest(url, RequestTypes.POST, data);
    }

    static put = (url, data) => {
        return this._sendRequest(url, RequestTypes.POST, data);
    }

    static get = (url, data) => {
        return this._sendRequest(url, RequestTypes.POST, data);
    }

    static delete = (url, data) => {
        return this._sendRequest(url, RequestTypes.POST, data);
    }

    static _sendRequest = (url, method, data) => {

        return window.fetch(url, {
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

}

export default Requests;