import React, {useEffect, useState} from "react";
import style from "./SideBar.module.scss";

import {Panel, panelGrid, panelStyled} from "shared/ui/panel/Panel";
import {Button, buttonStyled} from "shared/ui/button/Button";
import {enumSized} from "shared/ui/types";

import {Header} from "../header/Header";
import {NavBar} from "../navbar/NavBar";
import {Footer} from "../footer/Footer";
import {Settings} from "../settings/Settings";
import classNames from "classnames";

import {useAdaptation} from "shared/lib/hooks/use-adaptation/useAdaptation";

export const SideBar = React.memo(() => {
    const device = useAdaptation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(device === "mobile")
            setIsOpen(false);
        else if (device === "desktop") {
            setIsOpen(true);
        }

    }, [device]);

    const toggleBar = () => {
        setIsOpen(prevState => !prevState);
    }

    const checkingInnerWithSetButton = () => {
        if(device === "mobile") {
            return(
                <Button
                    onClick={toggleBar}
                    className={classNames(style.mobile_button)}
                    size={enumSized.SMALL}
                    width="75px" height="75px"
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
                    <Header/>
                    <Settings/>
                    <NavBar/>
                    <Footer/>
                </>
            )}

            {checkingInnerWithSetButton()}
        </Panel>
    )
});