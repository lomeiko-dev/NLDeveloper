import style from "./BlogPage.module.scss";

import {BlogList} from "./blog-list/BlogList";
import {Text} from "shared/ui/text/Text";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";
import {enumSized} from "shared/ui/types";

import { blogReducer, blogSelector, errorSelector, isLoadingSelector, totalCountSelector, uploadBlogsThunk} from "entities/blog";
import {likeReducer} from "entities/likes";
import {commentsReducer} from "entities/comments";
import {useEffect, useState} from "react";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";

const reducerLoaded: IReducer[] = [
    {storeKey: "blogReducer", reducer: blogReducer, save: false},
    {storeKey: "likeReducer", reducer: likeReducer, save: false},
    {storeKey: "commentsReducer", reducer: commentsReducer, save: false},
]

const LIMIT = 5;
const BlogPage = () => {
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    useEffect(() => {
        if(fetching){
            dispatch(uploadBlogsThunk({limit: LIMIT, page: page}))
                .then(() => setPage(prevState => prevState+1))
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    const blogs = useAppSelector(blogSelector) || [];
    const total_count = useAppSelector(totalCountSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    return (
        <ReducerLoader reducers={reducerLoaded}>
            <div className={style.page}>
                <div className={style.header}>
                    <Text size={enumSized.LARGE}>My blogs</Text>
                </div>
                <BlogList
                    blogs={blogs} total_count={total_count} isLoading={isLoading}  error={error}
                    setFetching={() => setFetching(true)}
                    limit={LIMIT}/>
            </div>
        </ReducerLoader>
    )
}

export default BlogPage;