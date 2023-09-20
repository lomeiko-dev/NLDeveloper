import React, {useState} from 'react';
import style from "./BodyCode.module.scss";
import {Code} from "shared/ui/code/Code";
import copy_img from "shared/assets/img/button-icon/copy.png";

interface IBodyTextProps {
    content: string,
}

const TIME_COPY_CODE = 700;
export const BodyCode: React.FC<IBodyTextProps> = React.memo(({content}) => {
    const [isCopy, setIsCopy] = useState(false);
    const copyHandler = () => {
        navigator.clipboard.writeText(content);

        setIsCopy(true);

        setTimeout(() => {
            setIsCopy(false);
        }, TIME_COPY_CODE)
    }

    return (
        <div>
            <Code syntax={content} className={style.code} classNameHeader={style.header}>
                <button className={style.button_copy} onClick={copyHandler}>
                    {isCopy ? "copied" : <img src={copy_img} alt="copy code"/>}
                </button>
            </Code>
        </div>
    );
});