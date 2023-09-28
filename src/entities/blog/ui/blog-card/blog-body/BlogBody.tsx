import React, {useMemo} from "react";
import style from "./BlogBody.module.scss";

import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {GetBlockBody} from "./body-components";
import {IBlogBody} from "../../../model/types/blog-scheme";

interface IBodyBlogProps {
    body: IBlogBody[];
}

export const BlogBody: React.FC<IBodyBlogProps> = React.memo(({body}) => {
    const getBlockBody = (body: IBlogBody) => useMemo(() => GetBlockBody(body), [body]);

    return (
        <div className={style.body}>
            {body.map(item => (
                <div key={item.content} className={style.content}>
                    <Text size={enumSized.MIDDLE}>{item.title}</Text>
                    {getBlockBody(item)}
                </div>
            ))}
        </div>
    );
});