class Config {

    private static authToken : string = '';

    static setAuthToken = token => {
        this.authToken = token;
    }

    static getAuthToken = () =>{
        return this.authToken;
    }
}

export default Config;