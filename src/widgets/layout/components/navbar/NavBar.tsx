import React from "react";
import style from "./NavBar.module.scss";

import {Link} from "shared/ui/link/Link"
import {enumSized} from "shared/ui/types";
import {pathRoute} from "shared/config/route";

import MainIcon from "shared/assets/img/nav-icon/main.svg";
import BlogIcon from "shared/assets/img/nav-icon/blog.svg";
import ProjectsIcon from "shared/assets/img/nav-icon/projects.svg";

const TFILE: string = "layout";

export const NavBar = React.memo(() => {
    return (
        <div className={style.bar_container}>
            <div className={style.bar}>
                <div className={style.item}>
                    <MainIcon className={style.icon_link} width="30px"/>
                    <Link tfile={TFILE} tkey="link_main" size={enumSized.MIDDLE} to={pathRoute.main}/>
                </div>
                <div className={style.item}>
                    <BlogIcon className={style.icon_link} width="30px"/>
                    <Link tfile={TFILE} tkey="link_blog" size={enumSized.MIDDLE} to={pathRoute.blog}/>
                </div>
                <div className={style.item}>
                    <ProjectsIcon className={style.icon_link} width="30px"/>
                    <Link tfile={TFILE} tkey="link_project" size={enumSized.MIDDLE} to={pathRoute.project}/>
                </div>
            </div>
        </div>
    )
});