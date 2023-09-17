import React from "react";
import style from "./Profile.module.scss";

import {IImageProps, Image, imageTypes} from "shared/ui/image/Image";
import {Text, textStyled} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {errorSelector, IProfileScheme, isloadingSelector, profileSelector} from "entities/profile";

import loader from "shared/assets/gif/loaders/loader.gif";
import classNames from "classnames";

interface IProfileProps extends Pick<IImageProps, "types" | "animation" | "styled">{
    className?: string,
    classNameImg?: string,
    profileScheme: IProfileScheme,
}

export const Profile: React.FC<IProfileProps> = React.memo((props) => {
    const {
        className,
        classNameImg,
        profileScheme,
        types = imageTypes.CIRCLE,
        styled,
        animation
    } = props

    const {
        profile,
        error,
        isLoading
    } = profileScheme

    if(error !== undefined){
        return (
            <div className={classNames(style.profile, className)}>
                <Text styled={textStyled.ERROR}>{error}</Text>
            </div>
        )
    }

    return (
        <div className={classNames(style.profile, className)}>
            <Image className={classNameImg}
                   types={types} styled={styled} animation={animation}
                   src={isLoading ? loader : profile && profile.avatar}/>

            <Text size={enumSized.LARGE}>{profile && profile.name}</Text>
        </div>
    )
});