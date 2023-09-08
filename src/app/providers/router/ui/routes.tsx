import {Suspense} from "react";
import {Route, Routes as ReactRoute} from "react-router-dom";
import {routeList} from "../lib/route-list";

export const Routes = () => {
    return (
        <Suspense fallback="Loading...">
            <ReactRoute>
                    {routeList.map(route => <Route key={route.path} {...route}/>)}
            </ReactRoute>
        </Suspense>
    );
};