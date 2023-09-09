import style from "./Settings.module.scss";
import {ThemeSwitcher} from "widgets/theme-switcher";
import {TranslatorSwitcher} from "widgets/translator-switcher";

export const Settings = () => {
    return (
        <div className={style.settings}>
            <ThemeSwitcher/>
            <TranslatorSwitcher/>
        </div>
    )
}