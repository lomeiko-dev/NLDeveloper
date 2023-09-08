import {buildWebpack} from "./config/build/buildWebpack";
import path from "path";
import {IBildEnv, IBuildPaths} from "./config/build/types";

export default (env: IBildEnv) => {

    const paths: IBuildPaths = {
        htmlPath: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'main.tsx'),
        buildPath: path.resolve(__dirname, 'build')
    }

    return buildWebpack({
        isDev: env.mode === "development",
        port: env.port || 3000,
        mode: env.mode || "development",
        paths: paths
    });
};