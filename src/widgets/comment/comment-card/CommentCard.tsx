import React from "react";
import style from './CommentCard.module.scss';

import {Panel, panelGrid} from "shared/ui/panel/Panel";
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";
import {Deleted, SetChanged} from "features/comment-crud";
import {Author} from "entities/profile";

import {useAuth} from "entities/auth";

import base_avatar from "shared/assets/img/base/base-avatar.png";

interface ICommentCardProps {
    id: string,
    id_user: string,
    name: string,
    body: string,
}

export const CommentCard: React.FC<ICommentCardProps> = ({name, body, id_user, id}) => {
    const {authData} = useAuth();

    const isAuthor = id_user === authData?.id;
    return (
        <Panel grid={panelGrid.COLUMN} className={style.comment}>
            <div className={style.header}>
                <Author isLoading={false} data={{id: "0", avatar: base_avatar, name: name}}/>
                {isAuthor &&
                    <div className={style.managment_block}>
                        <SetChanged id={id}/>
                        <Deleted id={id}/>
                    </div>}
            </div>

            <Text size={enumSized.SMALL}>{body}</Text>
        </Panel>
    );
};