import React from "react";
import style from "./Profile.module.scss";

import {Image, imageTypes} from "shared/ui/image/Image";
import {Text, textStyled} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import loader from "shared/assets/gif/loaders/loader.gif";
import classNames from "classnames";
import {IProfile} from "../../model/types/profile-scheme";

export enum avatarStyled {
    NONE = "none",
    STATICOUTLINE = "static_outline",
    ANIMATIONOUTLINE = "animation_outline"
}

interface IProfileProps {
    className?: string,
    classNameImg?: string,
    data?: IProfile,
    isLoading: boolean,
    error?: string,
    styled?: avatarStyled,
}

export const Profile: React.FC<IProfileProps> = React.memo((props) => {
    const {
        className,
        classNameImg,
        data,
        isLoading,
        error,
        styled = avatarStyled.NONE,
    } = props

    if(error !== undefined){
        return (
            <div className={classNames(style.profile, className)}>
                <Text styled={textStyled.ERROR}>{error}</Text>
            </div>
        )
    }

    return (
        <div className={classNames(style.profile, className)}>
            <div className={style[styled]}>
                <Image className={classNameImg}
                       types={imageTypes.CIRCLE}
                       src={isLoading ? loader : data && data.avatar}/>
            </div>

            <Text size={enumSized.LARGE}>{data && data.name}</Text>
        </div>
    )
});