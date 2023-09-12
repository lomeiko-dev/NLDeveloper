import webpack from "webpack";
import {IBuildSlice} from "./types";

export const buildResolve = (config: IBuildSlice):webpack.ResolveOptions => {
    return {
        alias: {
            app: config.app,
            page: config.page,
            widgets: config.widgets,
            features: config.features,
            entities: config.entities,
            shared: config.shared,
        },
        extensions: ['.tsx', '.ts', '.js'],
    }
}