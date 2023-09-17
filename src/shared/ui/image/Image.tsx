import React from "react";
import style from "./Image.module.scss";
import classNames from "classnames";
import * as url from "url";

export enum imageTypes {
    CIRCLE = "circle",
    BORDER = "border",
}

export enum imageStyled {
    FRAMING = "framing",
}

export enum imageAnimation {
    BROADCAST = "broadcast",
}

export interface IImageProps{
    className?: string,
    types?: imageTypes,
    styled?: imageStyled,
    animation?: imageAnimation,
    width?: string,
    height?: string,
    src: string,
}

export const Image: React.FC<IImageProps> = React.memo((props) => {
    const {
        className,
        types = imageTypes.BORDER,
        styled,
        animation,
        width,
        height,
        src
    } = props

    return (
        <div className={classNames(style.wrapper, styled && style[styled])}>
            <div
                className={classNames(style.img, className, style[types], animation && style[animation])}
                style={{backgroundImage: `url(${src})`, width: width, height: height}}/>
        </div>
    )
});