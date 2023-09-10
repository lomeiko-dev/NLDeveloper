import React from "react";
import style from "./Text.module.scss";
import classNames from "classnames";
import {enumSized, sized} from "../types";
import {useTranslation} from "react-i18next";

export enum textStyled {
    ERROR = "error"
}

interface ITextProps {
    children: React.ReactNode,
    className?: string,
    styled?: textStyled,
    size?: enumSized,
    tkey?: string,
    tfile?: string,
}

export const Text: React.FC<ITextProps> = React.memo((props) => {
    const {
        children,
        className,
        styled,
        size = enumSized.SMALL,
        tkey,
        tfile
    } = props;

    const {t} = useTranslation(tfile);

    return (
        <div className={classNames(style.text, props.className, style[styled], sized[size])}>
            {tkey === undefined ? children : t(tkey)}
        </div>
    )
});