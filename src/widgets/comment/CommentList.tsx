import React, {useEffect, useState} from "react";
import style from './CommentList.module.scss';

import {
    commentsSelector, errorSelector,
    isLoadingSelector, totalCountSelector,
    uploadCommentsThunk
} from "entities/comments";

import {Text, textStyled} from "shared/ui/text/Text";
import {Button, buttonStyled} from "shared/ui/button/Button";
import {CommentItem} from "./comment-item/CommentItem";

import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

import loader from "shared/assets/gif/loaders/loader.gif";

interface ICommentListProps {
    id_blog: string,
}

const LIMIT = 3;
export const CommentList: React.FC<ICommentListProps> = React.memo(({id_blog}) => {
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(uploadCommentsThunk({id_product: id_blog, page: page, limit: LIMIT}));
    }, [page]);

    const comments = useAppSelector(state => commentsSelector(state, id_blog));
    const totalCount = useAppSelector(state => totalCountSelector(state, id_blog));
    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    if(error !== undefined){
        return (
            <div className={style.list}>
                <Text styled={textStyled.ERROR}>{error}</Text>
            </div>
        )
    }

    const isShowMore = comments.length < totalCount;
    return (
        <div className={style.list}>
            {comments.map(com => <CommentItem key={com.id} {...com}/>)}
            { isShowMore &&
                <Button
                    onClick={() => setPage(prevState => prevState + 1)}
                    styled={buttonStyled.NONE}>Показать ещё...</Button> }

            {isLoading && <img src={loader} alt="loaded"/> }
        </div>
    );
});