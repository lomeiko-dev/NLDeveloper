export type typeAuth = "reg" | "auth" | "none";
export interface IAuth {
    id: string,
    idDevice: string,
    isBlocked: boolean,
    reason?: string
}

export interface IAuthScheme {
    data?: IAuth,
    typeAuth?: typeAuth
}