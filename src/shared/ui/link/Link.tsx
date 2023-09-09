import React from "react";
import style from "./Link.module.scss";

import {Link as ReactLink} from "react-router-dom";
import {LinkProps} from "react-router-dom";
import classNames from "classnames";
import {enumSized, sized} from "../types";

interface ILinkProps extends LinkProps{
    children?: React.ReactNode,
    className?: string,
    size?: enumSized,
}

export const Link: React.FC<ILinkProps> = (props) => {
    const {
        children,
        className,
        size = enumSized.SMALL,
        ...otherProps
    } = props;

    return (
        <ReactLink
            className={classNames(style.link, className, sized[size])}
            {...otherProps}> {children} </ReactLink>
    )
}