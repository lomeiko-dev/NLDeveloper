export type typeBody = "text" | "image" | "code";
export interface IBlogBody {
    type: typeBody,
    title: string,
    content: string,
}

export interface IBlog {
    id: string,
    title: string,
    sub_title: string,
    body: IBlogBody[],
    tags: string,
    createdAt: string
}

export interface IBlogScheme {
    blogs: IBlog[],
    totalCount: number
    isLoading: boolean,
    error?: string
}