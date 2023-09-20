import React from 'react';
import style from "./BlogTag.module.scss";

import {Panel} from "shared/ui/panel/Panel";
import {enumSized} from "shared/ui/types";
import {Text} from "shared/ui/text/Text";

interface IBlogTagProps {
    tags: string,
}

export const BlogTag: React.FC<IBlogTagProps> = ({tags}) => {
    return (
        <Panel className={style.tags}>
            <Text size={enumSized.SMALL}>{tags}</Text>
        </Panel>
    );
};