class Config {

    private static authToken : string = '';

    public static setAuthToken = (token : string) => {
        this.authToken = token;
    }

    public static getAuthToken = () =>{
        return this.authToken;
    }
}

export default Config;