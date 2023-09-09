import React from "react";
import style from "./Button.module.scss";
import classNames from "classnames";
import {enumSized, sized} from "../types";

export enum buttonStyled {
    "FILLED" = "filled",
    "OUTLINE" = "outline",
    "NONE" = "none",
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    className?: string,
    size?: enumSized,
    styled?: buttonStyled,
}

export const Button: React.FC<IButtonProps> = (props) => {
    const {
        children,
        className,
        size = enumSized.SMALL,
        styled = buttonStyled.NONE,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(style.button, className, sized[size], style[styled])}
            {...otherProps}>
            {children}
        </button>
    )
}