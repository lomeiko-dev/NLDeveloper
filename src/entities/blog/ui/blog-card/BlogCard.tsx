import React from "react";
import style from "./BlogCard.module.scss";
import classNames from "classnames";

import {BlogTitle} from "./blog-title/BlogTitle";
import {BlogBody} from "./blog-body/BlogBody";
import {BlogTag} from "./blog-tag/BlogTag";
import {Panel, panelStyled} from "shared/ui/panel/Panel";

import {IBlog} from "../../model/types/blog-scheme";

interface IBlogCardProps {
    blog: IBlog,
    className?: string
}

const LIMIT = 3
export const BlogCard: React.FC<IBlogCardProps> = React.memo(({blog, className}) => {
    return (
        <Panel className={classNames(style.card, className)} styled={panelStyled.SHADOW}>
            <BlogTitle title={blog.title} sub_title={blog.sub_title}/>
            <BlogBody body={blog.body}/>
            <BlogTag tags={blog.tags}/>
        </Panel>
    );
});