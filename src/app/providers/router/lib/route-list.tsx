import {RouteProps} from "react-router-dom";
import {pathRoute} from "shared/config/route";

import {MainPage} from "page/main";
import {BlogPage} from "page/blog";
import {ProjectPage} from "page/project";
import {AdminPage} from "page/admin";

export const routeList: RouteProps[] = [
    {
        path: pathRoute.main,
        element: (<MainPage/>)
    },
    {
        path: pathRoute.blog,
        element: (<BlogPage/>)
    },
    {
        path: pathRoute.project,
        element: (<ProjectPage/>)
    },
    {
        path: pathRoute.admin,
        element: (<AdminPage/>)
    },
]