import style from "./SideBar.module.scss";

import {Header} from "../header/Header";
import {NavBar} from "../navbar/NavBar";
import {Footer} from "../footer/Footer";
import {LinkBar} from "../linkbar/LinkBar";
import {Settings} from "../settings/Settings";

export const SideBar = () => {
    return (
        <div className={style.bar}>
            <Header/>
            <Settings/>
            <NavBar/>
            <LinkBar/>
            <Footer/>
        </div>
    )
}