declare class Accounts {
    private static routeProfile;
    private static routeList;
    private static routeUpdate;
    private static routeMyTickets;
    private static routeMe;
    private static routeSetPreference;
    private static routeRemovePreference;
    private static routeSetSecurePreference;
    private static routeRemoveSecurePreference;
    private static routeSetProfileImage;
    private static routeSetAvatarImage;
    static getProfile(user_id: string, query?: object | null, options?: object | null): Promise<any>;
    static getAccounts(query?: object | null, options?: object | null): Promise<any>;
    static getMyTickets(query?: object | null, options?: object | null): Promise<any>;
    static getMe(query?: object | null, options?: object | null): Promise<any>;
    static updateAccount(data: object, query?: object | null, options?: object | null): Promise<any>;
    static setPreference(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static removePreference(user_id: string, key: string, data?: object | null | undefined, query?: object | null, options?: object | null): Promise<any>;
    static setSecurePreference(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static removeSecurePreference(user_id: string, key: string, data?: object | null | undefined, query?: object | null, options?: object | null): Promise<any>;
}
export default Accounts;
