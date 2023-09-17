import React from "react";
import style from "./SideBar.module.scss";

import {Panel, panelGrid, panelStyled} from "shared/ui/panel/Panel";
import {Button, buttonStyled} from "shared/ui/button/Button";
import {enumSized} from "shared/ui/types";

import {Header} from "../header/Header";
import {NavBar} from "../navbar/NavBar";
import {Footer} from "../footer/Footer";
import {Settings} from "../settings/Settings";

import classNames from "classnames";

interface ISideBarProps {
    isOpen: boolean,
    visibleToggle: boolean,
    toggle: () => void,
}

export const SideBar: React.FC<ISideBarProps> = React.memo((props) => {
    const {
        isOpen,
        toggle,
        visibleToggle
    } = props;

    const mods = { [style.open]: isOpen }

    return (
        <Panel grid={panelGrid.COLUMN} styled={panelStyled.SHADOW}
               className={classNames(style.bar, mods)}>

            {isOpen && <>
                <Header/>
                <Settings/>
                <NavBar/>
                <Footer/>
            </>}

            {visibleToggle &&
                <Button
                    onClick={toggle}
                    className={style.mobile_button}
                    size={enumSized.SMALL} styled={buttonStyled.CIRCLE}>
                    открыть/закрыть
                </Button>}
        </Panel>
    )
});