import React, {SVGProps} from "react";
import style from "./Image.module.scss";
import classNames from "classnames";

export enum imageTypes {
    CIRCLE = "circle",
    BORDER = "border",
}

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement>{
    className?: string,
    types?: imageTypes,
    width?: string,
    height?: string,
}

export const Image: React.FC<IImageProps> = (props) => {
    const {
        className,
        types = imageTypes.BORDER,
        width = "50px",
        height = "50px",
        ...otherProps
    } = props

    return (
        <div
            className={classNames(style.img, className, style[types])}
            style={{width: width, height: height}}>
            <img width={width} {...otherProps}/>
        </div>
    )
}