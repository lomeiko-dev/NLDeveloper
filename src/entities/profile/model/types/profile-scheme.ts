
export interface IProfile {
    id: string,
    avatar: string,
    name: string,
}

export interface IProfileScheme {
    profile?: IProfile,
    isLoading: boolean,
    error?: string,
}