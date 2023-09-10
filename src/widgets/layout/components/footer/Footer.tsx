import React from "react";
import style from "./Footer.module.scss";

import {Text} from "shared/ui/text/Text";
import {Panel, panelColor} from "shared/ui/panel/Panel";
import {LinkBar} from "../linkbar/LinkBar";

export const Footer = React.memo(() => {
    return (
        <Panel className={style.footer} background={panelColor.TERNARY}>
            <LinkBar/>
            <Text>© Л.Н. Ломейко, 2023</Text>
        </Panel>
    )
});