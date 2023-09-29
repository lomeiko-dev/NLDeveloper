import React from "react";
import style from './BlogItem.module.scss';

import {BlogCard, errorSelector, IBlog, isLoadingSelector} from "entities/blog";
import {Panel} from "shared/ui/panel/Panel";
import {Author, profileSelector} from "entities/profile";
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";
import {CommentList} from "widgets/comment/CommentList";
import {Like} from "features/like";
import {FormComment} from "features/comment-crud";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

import {getChangedSelector} from "entities/comments";

export const BlogItem: React.FC<IBlog> = (blog) => {

    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    const changedComment = useAppSelector(getChangedSelector);

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
            </Panel>

            <CommentList id_blog={blog.id}/>

            {changedComment ?
                <FormComment
                    idChanged={changedComment.id} id_product={changedComment.id}
                    defaultName={changedComment.name} defaultBody={changedComment.body} />
                :
                <FormComment id_product={blog.id}/>}
        </div>
    );
};