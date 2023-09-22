import {Navigate, RouteProps} from "react-router-dom";
import {pathRoute} from "shared/config/route";

import {MainPage} from "page/main";
import {BlogPage} from "page/blog";
import {ProjectPage} from "page/project";
import {AdminPage} from "page/admin";
import {NotFound} from "page/not-found";
import {NotAuth} from "page/not-auth";

type appRouteProps = RouteProps & {
    authOnly?: boolean,
}

export const routeList: appRouteProps[] = [
    {
        path: "/",
        element: (<Navigate to={pathRoute.main}/>),
        authOnly: true,
    },
    {
        path: pathRoute.main,
        element: (<MainPage/>),
        authOnly: true,
    },
    {
        path: pathRoute.blog,
        element: (<BlogPage/>),
        authOnly: true,
    },
    {
        path: pathRoute.project,
        element: (<ProjectPage/>),
        authOnly: true,
    },
    {
        path: pathRoute.admin,
        element: (<AdminPage/>),
        authOnly: true,
    },
    {
        path: pathRoute.notAuth,
        element: (<NotAuth/>),
        authOnly: false,
    },
    {
        path: "*",
        element: (<NotFound/>),
        authOnly: false,
    },
]