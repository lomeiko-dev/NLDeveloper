import React from "react";
import style from "./BlogCard.module.scss";

import {BodyBlog, IBlog} from "entities/blog";

import {Text} from "shared/ui/text/Text";
import {Panel, panelStyled} from "shared/ui/panel/Panel";
import {Author, profileSelector} from "entities/profile";
import {enumSized} from "shared/ui/types";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

interface IBlogCardProps {
    blog: IBlog
}

export const BlogCard: React.FC<IBlogCardProps> = React.memo(({blog}) => {
    const profile = useAppSelector(profileSelector);

    return (
        <Panel className={style.card} styled={panelStyled.SHADOW}>
            <div className={style.header}>
                <Author className={style.text_header} data={profile}/>
                <Text className={style.text_header} size={enumSized.SMALL}>{blog.createdAt}</Text>
            </div>
            <div className={style.sub_header}>
                <Text size={enumSized.LARGE}>{blog.title}</Text>
                <Text size={enumSized.MIDDLE}>{blog.sub_title}</Text>
            </div>
            <BodyBlog body={blog.body}/>
            <div className={style.tags}>
                <Text size={enumSized.SMALL}>{blog.tags}</Text>
            </div>
        </Panel>
    );
});