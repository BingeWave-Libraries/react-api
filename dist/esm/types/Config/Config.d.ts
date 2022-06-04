declare class Config {
    private static authToken;
    static setAuthToken: (token: any) => void;
    static getAuthToken: () => string;
}
export default Config;
