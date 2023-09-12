export interface IProfileData {
    "id": string,
    "age": string,
    "education": string,
    "position": string,
    "biography": string
}

export interface IProfileDataScheme {
    profileData?: IProfileData,
    isLoading: boolean,
    error?: string,
}