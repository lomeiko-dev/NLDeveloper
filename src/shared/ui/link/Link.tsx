import React from "react";
import style from "./Link.module.scss";

import {Link as ReactLink} from "react-router-dom";
import {LinkProps} from "react-router-dom";
import classNames from "classnames";
import {enumSized, sized} from "../types";
import {useTranslation} from "react-i18next";

interface ILinkProps extends LinkProps{
    children?: React.ReactNode,
    className?: string,
    size?: enumSized,
    tkey?: string,
    tfile?: string,
}

export const Link: React.FC<ILinkProps> = React.memo((props) => {
    const {
        children,
        className,
        size = enumSized.SMALL,
        tkey,
        tfile,
        ...otherProps
    } = props;

    const {t} = useTranslation(tfile);

    return (
        <ReactLink
            className={classNames(style.link, className, sized[size])}
            {...otherProps}> {tkey === undefined ? children : t(tkey)} </ReactLink>
    )
});