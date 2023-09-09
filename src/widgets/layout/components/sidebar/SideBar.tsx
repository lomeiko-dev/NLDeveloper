import style from "./SideBar.module.scss";

import {Panel, panelGrid, panelStyled} from "shared/ui/panel/Panel";

import {Header} from "../header/Header";
import {NavBar} from "../navbar/NavBar";
import {Footer} from "../footer/Footer";
import {LinkBar} from "../linkbar/LinkBar";
import {Settings} from "../settings/Settings";

export const SideBar = () => {
    return (
        <Panel
            grid={panelGrid.COLUMN}
            styled={panelStyled.SHADOW}
            className={style.bar}>
            <Header/>
            <Settings/>
            <NavBar/>
            <LinkBar/>
            <Footer/>
        </Panel>
    )
}