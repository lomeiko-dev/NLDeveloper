import React, {Suspense} from "react";
import {Route, Routes as ReactRoute} from "react-router-dom";
import {routeList} from "../lib/route-list";
import {RequireAuth} from "./RequireAuth";

export const Routes = React.memo(() => {
    return (
        <Suspense fallback="Loading...">
            <ReactRoute>
                {routeList.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
                    />)}
            </ReactRoute>
        </Suspense>
    );
});