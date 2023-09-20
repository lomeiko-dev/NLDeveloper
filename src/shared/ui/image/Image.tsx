import React, {ImgHTMLAttributes} from "react";
import style from "./Image.module.scss";
import classNames from "classnames";

export enum imageTypes {
    CIRCLE = "circle",
    BORDER = "border",
}

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string,
    types?: imageTypes,
}

export const Image: React.FC<IImageProps> = React.memo((props) => {
    const {
        className,
        types = imageTypes.BORDER,
        ...otherProps
    } = props

    return (
        <img {...otherProps} alt={otherProps.alt}
             className={classNames(style.img, className, style[types])}/>
    )
});