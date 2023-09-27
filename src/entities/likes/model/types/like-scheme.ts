export interface ILike {
    id: string,
    id_user: string,
    id_product: string,
}

export interface ILikeScheme {
    likes: ILike[],
    isLoading: boolean
}