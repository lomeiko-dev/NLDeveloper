import React from "react";
import style from "./LinkBar.module.scss";

import VkIcon from "shared/assets/img/links-icon/vk.svg";
import GitIcon from "shared/assets/img/links-icon/github.svg";
import TelegramIcon from "shared/assets/img/links-icon/telegram.svg";

export const LinkBar = React.memo(() => {
    return (
        <div className={style.bar}>
            <a className={style.link} href="https://vk.com/id390878963">
                <VkIcon/>
            </a>
            <a className={style.link} href="https://github.com/lomeiko-dev">
                <GitIcon/>
            </a>
            <a className={style.link} href="Barsik0_o">
                <TelegramIcon/>
            </a>
        </div>
    )
});