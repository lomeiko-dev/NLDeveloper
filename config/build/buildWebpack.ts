import webpack from "webpack";

import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";

import {IBuildWebpack} from "./types";
import {buildDevServer} from "./buildDevServer";

export const buildWebpack = (config: IBuildWebpack): webpack.Configuration => {
    return {
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        mode: config.mode,
        entry: config.paths.entry,
        module: {
            rules: buildLoaders(config.isDev)
        },
        resolve: buildResolve(config.slice),
        output: {
            filename: "[name].[contenthash].js",
            path: config.paths.buildPath,
            clean: true,
        },
        plugins: buildPlugins(config.paths.htmlPath, config.isDev),
        devServer: buildDevServer(config), // FIX!!!!!!!!!!!!!!!!!!!!!!,
        devtool: 'cheap-module-source-map'
    }
}