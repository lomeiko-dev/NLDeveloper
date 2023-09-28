import React, {ReactNode, useEffect} from "react";
import style from "./BlogList.module.scss";

import {Image} from "shared/ui/image/Image";
import {Text, textStyled} from "shared/ui/text/Text";
import loader from "shared/assets/gif/loaders/loader.gif";
import {BlogItem} from "./blog-item/BlogItem";

import {IBlog} from "entities/blog";

interface IBlogListProps {
    blogs: IBlog[],
    setFetching: () => void,
    isLoading: boolean,
    error?: string,
    total_count: number,
    limit: number,
}

const CONTAINER = document.getElementsByClassName("container")[0];
export const BlogList: React.FC<IBlogListProps> = (props) => {
    const {
        blogs,
        setFetching,
        total_count,
        limit,
        isLoading,
        error,
    } = props;

    useEffect(() => {
        CONTAINER.addEventListener("scroll", scrollHandler);
        return () => {
            CONTAINER.removeEventListener("scroll", scrollHandler);
        }
    }, []);

    const scrollHandler = () => {
        const {scrollHeight, scrollTop} = CONTAINER;
        if (scrollHeight - (scrollTop +  window.innerHeight) < 100 && blogs?.length < total_count + limit)
            setFetching();
    };

    let contentStatus: ReactNode = null;
    if(isLoading)
        contentStatus = <Image className={style.loader} src={loader}/>;
    else if(error !== undefined)
        contentStatus = <Text styled={textStyled.ERROR}>{error}</Text>

    return (
        <div className={style.list} onScroll={scrollHandler}>
            {blogs && blogs.map(item => <BlogItem key={item.id} {...item}/>)}
            {contentStatus}
        </div>
    );
};