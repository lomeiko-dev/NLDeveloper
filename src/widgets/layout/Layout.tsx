import React from "react";
import style from "./Layout.module.scss";
import {SideBar} from "./components/sidebar/SideBar";

interface ILayoutProps {
    children: React.ReactNode,
    className?: string,
}
export const Layout: React.FC<ILayoutProps> =  (props) => {
    return (
        <div className={style.layout}>
            <SideBar/>
            <div className={props.className}>
                {props.children}
            </div>
        </div>
    );
};