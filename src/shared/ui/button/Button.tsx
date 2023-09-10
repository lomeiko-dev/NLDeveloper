import React from "react";
import style from "./Button.module.scss";
import classNames from "classnames";
import {enumSized, sized} from "../types";
import {useTranslation} from "react-i18next";

export enum buttonStyled {
    "FILLED" = "filled",
    "OUTLINE" = "outline",
    "CIRCLE" = "circle",
    "NONE" = "none",
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode,
    className?: string,
    size?: enumSized,
    styled?: buttonStyled,
    width?: string,
    height?: string,
    tkey?: string,
    tfile?: string,
}

export const Button: React.FC<IButtonProps> = React.memo((props) => {
    const {
        children,
        className,
        size = enumSized.SMALL,
        styled = buttonStyled.NONE,
        width,
        height,
        tkey,
        tfile,
        ...otherProps
    } = props;

    const {t} = useTranslation(tfile);

    return (
        <button
            className={classNames(style.button, className, sized[size], style[styled])}
            style={{width: width, height: height}}
            {...otherProps}>
            {tkey === undefined ? children : t(tkey)}
        </button>
    )
});