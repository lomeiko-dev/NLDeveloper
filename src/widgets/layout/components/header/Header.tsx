import React from "react";
import style from "./Header.module.scss";
import {Panel, panelGrid} from "shared/ui/panel/Panel";

import classNames from "classnames";
import {Profile} from "entities/profile";

export const Header = React.memo(() => {
    return (
        <Panel grid={panelGrid.COLUMN} className={classNames(style.header)}>
            <Profile color="#fff"/>
        </Panel>
    )
});