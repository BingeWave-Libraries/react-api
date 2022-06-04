declare class Config {
    private static authToken;
    static setAuthToken: (token: string) => void;
    static getAuthToken: () => string;
}
export default Config;
