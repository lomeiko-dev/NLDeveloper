import React, {useEffect, useState} from "react";
import style from './CommentList.module.scss';

import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import { commentsSelector, uploadCommentsThunk} from "entities/comments";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

import {CommentCard} from "./comment-card/CommentCard";
import {Button, buttonStyled} from "shared/ui/button/Button";
import {FormComment} from "features/comment-crud";

import {getChangedSelector} from "entities/comments";

interface ICommentListProps {
    id_product: string,
    total_count: number,
}

const LIMIT = 3;
export const CommentList: React.FC<ICommentListProps> = React.memo(({id_product, total_count}) => {
    const dispatch = useAppDispatch();

    const comments = useAppSelector(state => commentsSelector(state, id_product));
    const changedComment = useAppSelector(getChangedSelector);

    const [page, setPage] = useState(1);

    useEffect(() => {
        showMoreHandler();
    }, []);

    const showMoreHandler = () => {
        dispatch(uploadCommentsThunk({id_product: id_product, page: page, limit: LIMIT}))
            .finally(() => setPage(prevState => prevState + 1));
    }

    const isShowMore = comments.length < total_count
    return (
        <div className={style.list}>
            {comments.map(com => <CommentCard key={com.id} {...com}/>)}
            { isShowMore &&
                <Button onClick={showMoreHandler} styled={buttonStyled.NONE}>Показать ещё...</Button> }

            {changedComment === undefined ?
                <FormComment defaultBody="" defaultName="" id_product={id_product}/> :
                <FormComment
                    idChanged={changedComment.id}
                    defaultBody={changedComment.body} defaultName={changedComment.name}
                    id_product={id_product}/>}
        </div>
    );
});