import {IBuildWebpack} from "./types";
import type {Configuration} from "webpack-dev-server";

export const buildDevServer = (config: IBuildWebpack): Configuration => {
    return {
        port: config.port,
        open: true,
        historyApiFallback:true
    }
}