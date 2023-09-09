import style from "./Footer.module.scss";
import {Text} from "shared/ui/text/Text";
import {Panel, panelColor} from "../../../../shared/ui/panel/Panel";

export const Footer = () => {
    return (
        <Panel background={panelColor.TERNARY} className={style.footer}>
            <Text>© Л.И. Ломейко, 2023</Text>
        </Panel>
    )
}