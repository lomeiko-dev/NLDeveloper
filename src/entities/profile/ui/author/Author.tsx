import React from "react";
import style from "./Author.module.scss";

import {Image, imageTypes} from "shared/ui/image/Image";
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {IProfile} from "../../model/types/profile-scheme";
import classNames from "classnames";

interface IAuthorProps {
    data?: IProfile
    className?: string,
    colorText?: string,
}

export const Author: React.FC<IAuthorProps> = ({data, className, colorText}) => {
    return (
        <div className={classNames(style.author, className)}>
            {data && (
                <>
                    <Image className={style.avatar} types={imageTypes.CIRCLE} src={data.avatar}/>
                    <Text styles={{color: colorText}} size={enumSized.SMALL}>{data.name}</Text>
                </>
            )}
        </div>
    );
};