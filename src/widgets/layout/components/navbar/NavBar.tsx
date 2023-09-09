import React from "react";
import style from "./NavBar.module.scss";
import {Link} from "shared/ui/link/Link";

import {enumSized} from "shared/ui/types";
import {pathRoute} from "shared/config/route";

import MainIcon from "shared/assets/img/nav-icon/main.svg";
import BlogIcon from "shared/assets/img/nav-icon/blog.svg";
import ProjectsIcon from "shared/assets/img/nav-icon/projects.svg";

export const NavBar = () => {
    return (
        <div className={style.bar_wrapper}>
            <div className={style.bar}>
                <Link size={enumSized.MIDDLE} to={pathRoute.main}>
                    <MainIcon className={style.icon_link} width="30px"/>
                    <span>Main</span>
                </Link>

                <Link size={enumSized.MIDDLE} to={pathRoute.blog}>
                    <BlogIcon className={style.icon_link} width="30px"/>
                    <span>Blog</span>
                </Link>

                <Link size={enumSized.MIDDLE} to={pathRoute.project}>
                    <ProjectsIcon className={style.icon_link} width="30px"/>
                    <span>Projects</span>
                </Link>
            </div>
        </div>
    )
}