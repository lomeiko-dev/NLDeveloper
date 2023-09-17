import style from "./BlogList.module.scss";

import {useEffect, useState} from "react";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

import {BlogCard, blogSelector, errorSelector, isLoadingSelector, uploadBlogsThunk} from "entities/blog";
import {Author, profileSelector} from "entities/profile";

import {Image} from "shared/ui/image/Image";
import {Text, textStyled} from "shared/ui/text/Text";

import loader from "shared/assets/gif/loaders/loader.gif";



const CONTAINER = document.getElementsByClassName("container")[0];
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

    const blogs = useAppSelector(blogSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    const profile = useAppSelector(profileSelector);

    useEffect(() => {
        if(fetching){
            dispatch(uploadBlogsThunk({limit: 5, page: page}))
                .then(() => setPage(prevState => prevState+1))
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    const scrollHandler = () => {
        const {scrollHeight, scrollTop} = CONTAINER;
        const {innerHeight} = window;

        if (scrollHeight - (scrollTop +  innerHeight) < 100) {
            setFetching(true);
        }
    }

    if(error !== undefined){
        return (
            <div className={style.list} onScroll={scrollHandler}>
                <Text styled={textStyled.ERROR}>{error}</Text>
            </div>
        )
    }

    return (
        <div className={style.list} onScroll={scrollHandler}>
            {blogs &&
                blogs.map(item =>
                    <BlogCard
                        key={item.id}
                        blog={item} author={<Author colorText="#fff" data={profile}/>}
                    />)}
            {isLoading ? <Image className={style.loader} src={loader}/> : null}
        </div>
    );
};