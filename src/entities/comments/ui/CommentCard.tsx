import React from "react";
import style from './CommentCard.module.scss';

import {Panel, panelGrid} from "shared/ui/panel/Panel";
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {IComment} from "entities/comments";

export const CommentCard: React.FC<IComment> = (comment) => {
    return (
        <Panel grid={panelGrid.COLUMN} className={style.comment}>
            <Text size={enumSized.SMALL}>{comment.body}</Text>
        </Panel>
    );
};