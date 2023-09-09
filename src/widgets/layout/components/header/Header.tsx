import React from "react";
import style from "./Header.module.scss";
import {Image, imageTypes} from "shared/ui/image/Image";
import classNames from "classnames";
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

interface IHeaderProps {
    className?: string
}

export const Header: React.FC<IHeaderProps> = React.memo((props) => {
    return (
        <div className={classNames(style.header, props.className)}>
            <Image
                className={style.avatar}
                types={imageTypes.CIRCLE}
                width="200px" height="200px"
                src="https://yobte.ru/uploads/posts/2019-11/programmist-42-foto-18.jpg"/>

            <Text className={style.name} size={enumSized.LARGE}>Никита Ломейко</Text>
        </div>
    )
});