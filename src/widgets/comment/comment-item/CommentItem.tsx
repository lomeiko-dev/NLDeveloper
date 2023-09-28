import React from "react";
import style from './CommentItem.module.scss';

import {CommentCard, IComment} from "entities/comments";
import {Panel, panelGrid} from "shared/ui/panel/Panel";
import {Author} from "entities/profile";
import {Deleted, SetChanged} from "features/comment-crud";
import {Like} from "features/like";

import {useAuth} from "entities/auth";

import base_avatar from "shared/assets/img/base/base-avatar.png";

export const CommentItem = (comment: IComment) => {
    const {authData} = useAuth();
    return (
        <div className={style.item}>
            <Panel grid={panelGrid.LINE} className={style.header}>
                <Author avatar={base_avatar} name={comment.name}/>
                {authData?.id === comment.id_user &&
                    <div className={style.managment_block}>
                        <SetChanged id={comment.id}/>
                        <Deleted id={comment.id}/>
                    </div>}
            </Panel>
            <CommentCard {...comment}/>

            <Panel className={style.footer} grid={panelGrid.LINE}>
                <Like id_product={comment.id}/>
            </Panel>
        </div>
    );
};