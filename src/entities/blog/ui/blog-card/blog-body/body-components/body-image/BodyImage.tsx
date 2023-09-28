import style from "./BodyImage.module.scss";
import React from 'react';
import {Image, imageTypes} from "shared/ui/image/Image";


interface IBodyTextProps {
    content: string,
}

export const BodyImage: React.FC<IBodyTextProps> = React.memo(({content}) => {
    return (
        <div>
            <Image src={content} types={imageTypes.BORDER} className={style.img}/>
        </div>
    );
});