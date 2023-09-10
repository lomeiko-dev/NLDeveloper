import React from "react";
import style from "./Settings.module.scss";

import {ThemeSwitcher} from "widgets/switchers/theme-switcher";
import {TranslatorSwitcher} from "widgets/switchers/translator-switcher";

export const Settings = React.memo (() => {
    return (
        <div className={style.settings}>
            <ThemeSwitcher/>
            <TranslatorSwitcher/>
        </div>
    )
});