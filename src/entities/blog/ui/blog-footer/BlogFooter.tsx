import style from './BlogFooter.module.scss';
import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";
import React from "react";

interface IBlogFooterProps {
    likes: number,
    comments: number,
}

export const BlogFooter: React.FC<IBlogFooterProps> = ({likes, comments}) => {
    return (
        <div className={style.footer}>
            <Text size={enumSized.SMALL}>❤ {likes}</Text>
            <Text size={enumSized.SMALL}>💬 {comments}</Text>
        </div>
    );
};