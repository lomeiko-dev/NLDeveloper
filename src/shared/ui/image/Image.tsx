import React from "react";
import style from "./Image.module.scss";
import classNames from "classnames";
import * as url from "url";

export enum imageTypes {
    CIRCLE = "circle",
    BORDER = "border",
}

export enum imageAnimation {
    BROADCAST = "broadcast",
}

export interface IImageProps{
    className?: string,
    types?: imageTypes,
    animation?: imageAnimation,
    width?: string,
    height?: string,
    src: string,
}

export const Image: React.FC<IImageProps> = React.memo((props) => {
    const {
        className,
        types = imageTypes.BORDER,
        animation,
        width,
        height,
        src
    } = props

    return (
            <div
                className={classNames(style.img, className, style[types], style[animation])}
                style={{backgroundImage: `url(${src})`, width: width, height: height}}/>
    )
});