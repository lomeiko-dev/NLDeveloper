import React from "react";
import style from "./Image.module.scss";
import classNames from "classnames";

export enum imageTypes {
    CIRCLE = "circle",
    BORDER = "border",
}

export enum imageAnimation {
    BROADCAST = "broadcast",
}

export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement>{
    className?: string,
    types?: imageTypes,
    animation?: imageAnimation,
    width?: string,
    height?: string,
}

export const Image: React.FC<IImageProps> = React.memo((props) => {
    const {
        className,
        types = imageTypes.BORDER,
        animation,
        width = "50px",
        height = "50px",
        ...otherProps
    } = props

    return (
        <div className={style[animation]}>
            <div
                className={classNames(style.img, className, style[types])}
                style={{width: width, height: height}}>
                <img width={width} {...otherProps}/>
            </div>
        </div>
    )
});