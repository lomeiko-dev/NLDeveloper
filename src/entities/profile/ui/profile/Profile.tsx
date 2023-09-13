import React from "react";
import style from "./Profile.module.scss";

import {IImageProps, Image, imageTypes} from "shared/ui/image/Image";
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {isloadingSelector, profileSelector} from "entities/profile";

import loader from "shared/assets/gif/loaders/loader.gif";
import classNames from "classnames";

interface IProfileProps extends Pick<IImageProps, "types" | "animation">{
    className?: string,
    classNameImgWrapper?: string
    classNameImg?: string
}

export const Profile: React.FC<IProfileProps> = React.memo((props) => {
    const {
        className,
        classNameImgWrapper,
        classNameImg,
        types = imageTypes.CIRCLE,
        animation
    } = props

    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);

    return (
        <div className={classNames(style.profile, className)}>
            <div className={classNameImgWrapper}>
                <Image
                    className={classNameImg}
                    types={types}
                    animation={animation}
                    src={isLoading ? loader : profile && profile.avatar}/>
            </div>

            <Text size={enumSized.LARGE}>{profile && profile.name}</Text>
        </div>
    )
});