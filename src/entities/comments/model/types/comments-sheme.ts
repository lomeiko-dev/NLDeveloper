export type totalCount = {
    id: string,
    count: number,
}

export interface IComment {
    id: string,
    id_user: string,
    id_product: string,
    name: string,
    body: string,
}

export interface ICommentsScheme {
    comments: IComment[],
    totalCounts: totalCount[],
    idChanged?: string,
    isLoading: boolean,
    error?: string,
}