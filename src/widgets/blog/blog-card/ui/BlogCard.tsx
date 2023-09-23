import React from "react";
import style from "./BlogCard.module.scss";

import {BlogBody, BlogFooter, BlogTag, BlogTitle, IBlog} from "entities/blog";

import {Text} from "shared/ui/text/Text";
import {Panel, panelStyled} from "shared/ui/panel/Panel";
import {Author, errorSelector, isloadingSelector, profileSelector} from "entities/profile";
import {enumSized} from "shared/ui/types";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

interface IBlogCardProps {
    blog: IBlog
}

export const BlogCard: React.FC<IBlogCardProps> = React.memo(({blog}) => {
    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);
    const error = useAppSelector(errorSelector);

    return (
        <Panel className={style.card} styled={panelStyled.SHADOW}>
            <div className={style.header}>
                <Author className={style.text_header} isLoading={isLoading} error={error} data={profile}/>
                <Text className={style.text_header} size={enumSized.SMALL}>{blog.createdAt}</Text>
            </div>

            <BlogTitle title={blog.title} sub_title={blog.sub_title}/>
            <BlogBody body={blog.body}/>
            <BlogTag tags={blog.tags}/>
            <BlogFooter likes={50} comments={7}/>
        </Panel>
    );
});