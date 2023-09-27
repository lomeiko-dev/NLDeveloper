import React, {useEffect, useState} from "react";
import {unwrapResult} from "@reduxjs/toolkit";
import style from "./BlogCard.module.scss";

import {BlogBody, BlogTag, BlogTitle, IBlog} from "entities/blog";
import {Like} from "features/like";
import {Text} from "shared/ui/text/Text";
import {Panel, panelStyled} from "shared/ui/panel/Panel";
import {enumSized} from "shared/ui/types";
import {CommentList} from "widgets/comment/CommentList";
import {Author, errorSelector, isloadingSelector, profileSelector} from "entities/profile";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useAuth} from "entities/auth";

import {getLikesThunk, isLikedSelector, likeCountSelector} from "entities/likes";
import {getCommentsCountThunk} from "entities/comments";

interface IBlogCardProps {
    blog: IBlog
}

export const BlogCard: React.FC<IBlogCardProps> = React.memo(({blog}) => {
    const dispatch = useAppDispatch();
    const {authData} = useAuth();

    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);
    const error = useAppSelector(errorSelector);

    const likes_count = useAppSelector(state => likeCountSelector(state, blog.id));
    const isLiked = useAppSelector(state => isLikedSelector(state, blog.id, authData?.id || "-1"))
    const [commentsCount, setCommentsCount] = useState(0);

    useEffect(() => {
        dispatch(getLikesThunk(blog.id));

        dispatch(getCommentsCountThunk(blog.id))
            .then(unwrapResult).then(res => setCommentsCount(res))
    }, []);

    return (
        <div className={style.wrapper}>
            <Panel className={style.card} styled={panelStyled.SHADOW}>
                <div className={style.header}>
                    <Author className={style.text_header} isLoading={isLoading} error={error} data={profile}/>
                    <Text className={style.text_header} size={enumSized.SMALL}>{blog.createdAt}</Text>
                </div>

                <BlogTitle title={blog.title} sub_title={blog.sub_title}/>
                <BlogBody body={blog.body}/>
                <BlogTag tags={blog.tags}/>

                <div className={style.footer}>
                    <Like isActive={isLiked} like_count={likes_count} id_product={blog.id}/>
                    <Text size={enumSized.SMALL}>💬 {commentsCount}</Text>
                </div>
            </Panel>
            <CommentList total_count={commentsCount} id_product={blog.id}/>
        </div>
    );
});