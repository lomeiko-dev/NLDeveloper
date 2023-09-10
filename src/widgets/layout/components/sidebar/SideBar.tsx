import React, {useState} from "react";
import style from "./SideBar.module.scss";

import {Panel, panelGrid, panelStyled} from "shared/ui/panel/Panel";
import {Button, buttonStyled} from "shared/ui/button/Button";
import {enumSized} from "shared/ui/types";

import {Header} from "../header/Header";
import {NavBar} from "../navbar/NavBar";
import {Footer} from "../footer/Footer";
import {LinkBar} from "../linkbar/LinkBar";
import {Settings} from "../settings/Settings";
import classNames from "classnames";

import {MIN_WIDTH_APP} from "shared/assets/consts/vars";

export const SideBar = React.memo(() => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleBar = () => {
        if(window.innerWidth <= MIN_WIDTH_APP) {
            setIsOpen(prevState => !prevState);
        }
    }

    const checkingInnerWithSetButton = () => {
        if(window.innerWidth <= MIN_WIDTH_APP) {
            return(
                <Button
                    onClick={toggleBar}
                    className={classNames(style.mobile_button)}
                    size={enumSized.SMALL}
                    width="100px" height="100px"
                    styled={buttonStyled.CIRCLE}>
                    открыть/закрыть
                </Button>
            )
        }
    }

    const mods = { [style.open]: isOpen }
    return (
        <Panel
            grid={panelGrid.COLUMN}
            styled={panelStyled.SHADOW}
            className={classNames(style.bar, mods)}>

            {isOpen && (
                <>
                    <div className={style.top}>
                        <Header/>
                        <Settings/>
                    </div>
                    <div className={style.middle}>
                        <NavBar/>
                    </div>
                    <div className={style.bottom}>
                        <LinkBar/>
                        <Footer/>
                    </div>
                </>
            )}

            {checkingInnerWithSetButton()}
        </Panel>
    )
});