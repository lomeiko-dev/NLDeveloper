import React, {CSSProperties, HTMLAttributes} from "react";
import style from "./Text.module.scss";
import classNames from "classnames";
import {enumSized, sized} from "../types";
import {useTranslation} from "react-i18next";

export enum textStyled {
    ERROR = "error"
}

interface ITextProps extends HTMLAttributes<HTMLDivElement>{
    children?: React.ReactNode,
    className?: string,
    styles?: CSSProperties
    styled?: textStyled,
    size?: enumSized,
    tkey?: string,
    tfile?: string,
}

export const Text: React.FC<ITextProps> = React.memo((props) => {
    const {
        children,
        styles,
        className,
        styled,
        size = enumSized.SMALL,
        tkey,
        tfile,
        ...otherComponent
    } = props;

    const {t} = useTranslation(tfile);

    return (
        <div {...otherComponent} style={styles} className={classNames(style.text, styled && style[styled], sized[size], className)}>
            {tkey === undefined ? children : t(tkey)}
        </div>
    )
});