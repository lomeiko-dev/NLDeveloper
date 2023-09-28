import React from "react";
import style from "./Author.module.scss";

import {Image, imageTypes} from "shared/ui/image/Image";
import {Text, textStyled} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";
import classNames from "classnames";

import loader from "shared/assets/gif/loaders/loader.gif";

interface IAuthorProps {
    avatar: string,
    name: string,
    isLoading?: boolean,
    error?: string,
    className?: string,
}

export const Author: React.FC<IAuthorProps> = React.memo((props) => {
    const {
        error,
        isLoading = false,
        className,
        name,
        avatar,
    } = props;

    if(error !== undefined){
        return <Text styled={textStyled.ERROR}>{error}</Text>
    }

    return (
        <div className={classNames(style.author, className)}>
            <Image className={style.avatar} types={imageTypes.CIRCLE} src={isLoading ? loader : avatar}/>
            <Text size={enumSized.MIDDLE}>{name}</Text>
        </div>
    );
});