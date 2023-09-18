import style from "./BodyText.module.scss";
import React from 'react';
import {enumSized} from "shared/ui/types";
import {Text} from "shared/ui/text/Text";

interface IBodyTextProps {
    content: string,
}

export const BodyText: React.FC<IBodyTextProps> = React.memo(({content}) => {
    return (
        <div>
            <Text size={enumSized.SMALL}>{content}</Text>
        </div>
    );
});