import React from "react";
import style from "./BlogCard.module.scss";
import {IBlog} from "../../model/types/blog-scheme";

import {Text} from "shared/ui/text/Text";
import {Image, imageTypes} from "shared/ui/image/Image";
import {Panel, panelStyled} from "shared/ui/panel/Panel";
import {enumSized} from "shared/ui/types";

interface IBlogCardProps {
    blog: IBlog,
    author: React.ReactNode,
}

export const BlogCard: React.FC<IBlogCardProps> = ({blog, author}) => {
    return (
        <Panel className={style.card} styled={panelStyled.SHADOW}>

            <div className={style.header}>
                {author}
                <Text className={style.text_date} size={enumSized.SMALL}>{blog.createdAt}</Text>
            </div>

            <div className={style.sub_header}>
                <Text size={enumSized.LARGE}>{blog.title}</Text>
                <Text size={enumSized.MIDDLE}>{blog.sub_title}</Text>
            </div>

            <div className={style.body}>
                {blog.body.map(item => (
                    <div key={item.content} className={style.block}>
                        <Text size={enumSized.MIDDLE}>{item.title}</Text>
                        {item.type === "image" ? (
                            <Image src={item.content} types={imageTypes.BORDER}/>
                        ) : (
                            <Text size={enumSized.SMALL}>{item.content}</Text>
                        )}
                    </div>
                ))}
            </div>

            <div className={style.tags}>
                <Text size={enumSized.SMALL}>{blog.tags}</Text>
            </div>

        </Panel>
    );
};