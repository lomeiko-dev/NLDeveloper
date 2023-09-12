import React from "react";
import style from "./Profile.module.scss";

import {IImageProps, Image, imageTypes} from "shared/ui/image/Image";
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {isloadingSelector, profileSelector} from "entities/profile";

import loader from "shared/assets/gif/loaders/loader.gif";

interface IProfileProps extends Omit<IImageProps, "types" | "className" | "children">{
    color?: string
}

export const Profile: React.FC<IProfileProps> = React.memo((props) => {
    const {
        animation,
        width = "200px",
        height = "200px",
        color,
        ...otherProps
    } = props

    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);

    return (
        <div className={style.profile}>
            <div style={{border: `2px solid ${color}`}} className={style.avatar}>
                <Image
                    types={imageTypes.CIRCLE}
                    width={width} height={height}
                    animation={animation}
                    src={isLoading ? loader : profile && profile.avatar}/>
            </div>

            <Text styles={{color: color}} size={enumSized.LARGE}>{profile && profile.name}</Text>
        </div>
    )
});