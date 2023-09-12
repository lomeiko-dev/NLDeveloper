export type typeMode = "production" | "development"

export interface IBuildWebpack {
    isDev: boolean,
    port: number
    mode: typeMode,
    paths: IBuildPaths,
    slice: IBuildSlice
}

export interface IBuildPaths {
    htmlPath: string,
    entry: string,
    buildPath: string,
}

export interface IBuildSlice {
    app: string,
    page: string,
    widgets: string,
    features: string,
    entities: string,
    shared: string,
}

export interface IBildEnv {
    mode: typeMode,
    port: number,
}