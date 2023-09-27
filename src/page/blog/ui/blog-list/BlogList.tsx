import {ReactNode, useEffect, useState} from "react";
import style from "./BlogList.module.scss";

import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

import {blogSelector,
        errorSelector,
        isLoadingSelector,
        totalCountSelector,
        uploadBlogsThunk} from "entities/blog";

import {Image} from "shared/ui/image/Image";
import {Text, textStyled} from "shared/ui/text/Text";
import {BlogCard} from "../blog-card/BlogCard";
import loader from "shared/assets/gif/loaders/loader.gif";
import {CommentList} from "../../../../widgets/comment/CommentList";

const CONTAINER = document.getElementsByClassName("container")[0];
const LIMIT = 5;
export const BlogList = () => {
    useEffect(() => {
        CONTAINER.addEventListener("scroll", scrollHandler);
        return () => {
            CONTAINER.removeEventListener("scroll", scrollHandler);
        }
    }, []);

    const [fetching, setFetching] = useState(true);
    const [page, setPage] = useState(1);

    const dispatch = useAppDispatch();

    const blogs = useAppSelector(blogSelector) || [];
    const totalCount = useAppSelector(totalCountSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    useEffect(() => {
        if(fetching){
            dispatch(uploadBlogsThunk({limit: LIMIT, page: page}))
                .then(() => setPage(prevState => prevState+1))
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    const scrollHandler = () => {
        const {scrollHeight, scrollTop} = CONTAINER;
        if (scrollHeight - (scrollTop +  window.innerHeight) < 100 && blogs?.length < totalCount + LIMIT)
            setFetching(true);
    };

    let contentStatus: ReactNode = null;

    if(isLoading)
        contentStatus = <Image className={style.loader} src={loader}/>;
    else if(error !== undefined)
        contentStatus = <Text styled={textStyled.ERROR}>{error}</Text>

    return (
        <div className={style.list} onScroll={scrollHandler}>
            {blogs && blogs.map(item =>
                <BlogCard key={item.id} blog={item}/>
            )}
            {contentStatus}
        </div>
    );
};