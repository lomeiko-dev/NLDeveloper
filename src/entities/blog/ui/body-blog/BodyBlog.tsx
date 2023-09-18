import React, {useMemo} from "react";
import style from "./BodyBlog.module.scss";

import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {IBlogBody} from "../../model/types/blog-scheme";
import {GetBlockBody} from "./lib/utils/get-block-body";

interface IBodyBlogProps {
    body: IBlogBody[];
}

export const BodyBlog: React.FC<IBodyBlogProps> = React.memo(({body}) => {
    const getBlockBody = (body: IBlogBody) => useMemo(() => GetBlockBody(body), [body]);

    return (
        <div className={style.body}>
            {body.map(item => (
                <div key={item.content}>
                    <Text size={enumSized.MIDDLE}>{item.title}</Text>
                    {getBlockBody(item)}
                </div>
            ))}
        </div>
    );
});