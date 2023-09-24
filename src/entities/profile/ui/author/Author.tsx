import React from "react";
import style from "./Author.module.scss";

import {Image, imageTypes} from "shared/ui/image/Image";
import {Text, textStyled} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {IProfile} from "../../model/types/profile-scheme";
import classNames from "classnames";

import loader from "shared/assets/gif/loaders/loader.gif";

interface IAuthorProps {
    data?: IProfile,
    isLoading: boolean,
    error?: string,
    className?: string,
}

export const Author: React.FC<IAuthorProps> = React.memo((props) => {
    const {
        error,
        isLoading,
        className,
        data
    } = props;

    if(error !== undefined){
        return <Text styled={textStyled.ERROR}>{error}</Text>
    }

    return (
        <div className={classNames(style.author, className)}>
            {data && (
                <>
                    <Image className={style.avatar} types={imageTypes.CIRCLE} src={isLoading ? loader : data.avatar}/>
                    <Text size={enumSized.MIDDLE}>{data.name}</Text>
                </>
            )}
        </div>
    );
});