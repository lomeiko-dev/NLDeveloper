import React from "react";
import style from './CommentList.module.scss';

import {IComment} from "entities/comments";

import {Text, textStyled} from "shared/ui/text/Text";
import {Button, buttonStyled} from "shared/ui/button/Button";

import loader from "shared/assets/gif/loaders/loader.gif";
import {useAuth} from "entities/auth";
import {CommentItem} from "./comment-item/CommentItem";

interface ICommentListProps {
    comments: IComment[],
    total_count: number,
    isLoading: boolean,
    error?: string,
    showMoreHandler: () => void,
}

export const CommentList: React.FC<ICommentListProps> = React.memo((props) => {
    const {
        comments,
        total_count,
        showMoreHandler,
        isLoading,
        error
    } = props;

    const {authData} = useAuth();

    if(error !== undefined){
        return (
            <div className={style.list}>
                <Text styled={textStyled.ERROR}>{error}</Text>
            </div>
        )
    }

    const isShowMore = comments.length < total_count
    return (
        <div className={style.list}>
            {isLoading ?
                <img src={loader} alt="loaded"/> :
                <>
                    {comments.map(com => <CommentItem {...com}/>)}
                    { isShowMore &&
                        <Button onClick={showMoreHandler} styled={buttonStyled.NONE}>Показать ещё...</Button> }
                </>}
        </div>
    );
});