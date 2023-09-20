import React from 'react';
import style from "./BlogTitle.module.scss";

import {Panel, panelGrid} from "shared/ui/panel/Panel";
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {IBlog} from "../../model/types/blog-scheme";
import classNames from "classnames";

interface IBodyTitleProps extends Pick<IBlog, "title" | "sub_title">{
    className?: string,
}

export const BlogTitle: React.FC<IBodyTitleProps> = React.memo(({title, sub_title, className}) => {
    return (
        <Panel grid={panelGrid.COLUMN} className={classNames(style.header, className)}>
            <Text size={enumSized.LARGE}>{title}</Text>
            <Text size={enumSized.MIDDLE}>{sub_title}</Text>
        </Panel>
    );
});