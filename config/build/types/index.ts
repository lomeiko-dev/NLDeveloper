export type typeMode = "production" | "development"

export interface IBuildWebpack {
    isDev: boolean,
    port: number
    mode: typeMode,
    paths: IBuildPaths,
}

export interface IBuildPaths {
    htmlPath: string,
    entry: string,
    buildPath: string,
}

export interface IBildEnv {
    mode: typeMode,
    port: number,
}