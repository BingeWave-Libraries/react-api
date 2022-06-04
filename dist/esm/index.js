var Config = /** @class */ (function () {
    function Config() {
    }
    var _a;
    _a = Config;
    Config.authToken = '';
    Config.setAuthToken = function (token) {
        _a.authToken = token;
    };
    Config.getAuthToken = function () {
        return _a.authToken;
    };
    return Config;
}());

var RequestTypes = /** @class */ (function () {
    function RequestTypes() {
    }
    RequestTypes.GET = "GET";
    RequestTypes.POST = "POST";
    RequestTypes.PUT = "PUT";
    RequestTypes.DELETE = "DELETE";
    return RequestTypes;
}());

var Requests = /** @class */ (function () {
    function Requests() {
    }
    var _a;
    _a = Requests;
    Requests.post = function (url, data) {
        return _a._sendRequest(url, RequestTypes.POST, data);
    };
    Requests.put = function (url, data) {
        return _a._sendRequest(url, RequestTypes.POST, data);
    };
    Requests.get = function (url, data) {
        return _a._sendRequest(url, RequestTypes.POST, data);
    };
    Requests.delete = function (url, data) {
        return _a._sendRequest(url, RequestTypes.POST, data);
    };
    Requests._sendRequest = function (url, method, data) {
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
    };
    return Requests;
}());

var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.login = function (data) {
        return Requests.post(this.routeLogin.route, data);
    };
    Auth.register = function (data) {
        return Requests.post(this.routeRegister.route, data);
    };
    Auth.routeLogin = {
        route: "/auth/login",
        method: RequestTypes.POST
    };
    Auth.routeRegister = {
        route: "/auth/register",
        method: RequestTypes.POST
    };
    Auth.routeForgotPassword = {
        route: "/auth/forgotpassword",
        method: RequestTypes.POST
    };
    Auth.routeLoginToOrganizer = {
        route: "/auth/loginToOrganizer",
        method: RequestTypes.POST
    };
    Auth.routeRegisterToOrganizer = {
        route: "/registerToOrganizer",
        method: RequestTypes.POST
    };
    return Auth;
}());

export { Auth, Config };
//# sourceMappingURL=index.js.map
