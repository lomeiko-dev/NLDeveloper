import {buildWebpack} from "./config/build/buildWebpack";
import path from "path";
import {IBildEnv, IBuildPaths, IBuildSlice} from "./config/build/types";

export default (env: IBildEnv) => {

    const paths: IBuildPaths = {
        htmlPath: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'main.tsx'),
        buildPath: path.resolve(__dirname, 'build')
    }

    const slice: IBuildSlice = {
        app: path.resolve(__dirname, "src", "app/"),
        page: path.resolve(__dirname, "src", "page/"),
        widgets: path.resolve(__dirname, "src", "widgets/"),
        features: path.resolve(__dirname, "src", "features/"),
        entity: path.resolve(__dirname, "src", "entity/"),
        shared: path.resolve(__dirname, "src", "shared/"),
    }

    return buildWebpack({
        isDev: env.mode === "development",
        port: env.port || 3000,
        mode: env.mode || "development",
        paths: paths,
        slice: slice,
    });
};