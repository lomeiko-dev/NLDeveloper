import React, {useEffect, useState} from "react";
import style from './BlogItem.module.scss';
import {unwrapResult} from "@reduxjs/toolkit";

import {BlogCard, errorSelector, IBlog, isLoadingSelector} from "entities/blog";
import {Panel} from "shared/ui/panel/Panel";
import {Author, profileSelector} from "entities/profile";
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";
import {CommentList} from "widgets/comment/CommentList";
import {Like} from "features/like";
import {FormComment} from "features/comment-crud";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";

import {commentsSelector, getChangedSelector, getCommentsCountThunk, uploadCommentsThunk,
        isLoadingSelector as isLoadingCommentSelector,
        errorSelector as errorCommentSelector} from "entities/comments";

const LIMIT = 3;
export const BlogItem: React.FC<IBlog> = (blog) => {
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(uploadCommentsThunk({id_product: blog.id, page: page, limit: LIMIT}));

        dispatch(getCommentsCountThunk(blog.id))
            .then(unwrapResult).then(res => setTotalCount(res));
    }, [page]);

    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    const comments = useAppSelector(state => commentsSelector(state, blog.id));
    const isLoadingComments = useAppSelector(isLoadingCommentSelector);
    const errorComments = useAppSelector(errorCommentSelector);
    const changedComment = useAppSelector(getChangedSelector);
    const [totalCount, setTotalCount] = useState(0);

    return (
        <div className={style.item}>
            <Panel className={style.header}>
                <Author
                    isLoading={isLoading} error={error}
                    avatar={profile?.avatar || ""} name={profile?.name || ""}/>
                <Text size={enumSized.SMALL}>{blog.createdAt}</Text>
            </Panel>

            <BlogCard blog={blog}/>

            <Panel className={style.footer}>
                <Like id_product={blog.id}/>
                <Text size={enumSized.MIDDLE}>💬 {totalCount}</Text>
            </Panel>

            <CommentList
                comments={comments}
                showMoreHandler={() => setTotalCount(prevState => prevState + 1)}
                isLoading={isLoadingComments} error={errorComments}
                total_count={totalCount}/>

            {changedComment ?
                <FormComment
                    idChanged={changedComment.id} id_product={blog.id}
                    defaultName={changedComment.name} defaultBody={changedComment.body} />
                :
                <FormComment id_product={blog.id}/>}
        </div>
    );
};