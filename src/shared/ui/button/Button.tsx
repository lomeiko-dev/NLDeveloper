import React from "react";
import style from "./Button.module.scss";
import classNames from "classnames";
import {enumSized, sized} from "../types";

export enum buttonStyled {
    "FILLED" = "filled",
    "OUTLINE" = "outline",
    "CIRCLE" = "circle",
    "NONE" = "none",
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    className?: string,
    size?: enumSized,
    styled?: buttonStyled,
    width?: string,
    height?: string
}

export const Button: React.FC<IButtonProps> = React.memo((props) => {
    const {
        children,
        className,
        size = enumSized.SMALL,
        styled = buttonStyled.NONE,
        width,
        height,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(style.button, className, sized[size], style[styled])}
            style={{width: width, height: height}}
            {...otherProps}>
            {children}
        </button>
    )
});