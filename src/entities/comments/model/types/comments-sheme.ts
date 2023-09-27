export interface IComment {
    id: string,
    id_user: string,
    id_product: string,
    name: string,
    body: string,
}

export interface ICommentsScheme {
    comments: IComment[],
    idChanged?: string,
}