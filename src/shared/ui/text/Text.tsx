import React from "react";
import style from "./Text.module.scss";
import classNames from "classnames";
import {enumSized, sized} from "../types";

export enum textStyled {
    ERROR = "error"
}

interface ITextProps {
    children: React.ReactNode,
    className?: string,
    styled?: textStyled,
    size?: enumSized,
}

export const Text: React.FC<ITextProps> = React.memo((props) => {
    const {
        children,
        className,
        styled,
        size = enumSized.SMALL,
    } = props;

    return (
        <div className={classNames(style.text, props.className, style[styled], sized[size])}>
            {children}
        </div>
    )
});