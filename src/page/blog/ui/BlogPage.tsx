import style from "./BlogPage.module.scss";

import {BlogList} from "./blog-list/BlogList";
import {Text} from "shared/ui/text/Text";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";
import {enumSized} from "shared/ui/types";

import {blogReducer} from "entities/blog";
import {likeReducer} from "entities/likes";
import {commentsReducer} from "entities/comments";

const reducerLoaded: IReducer[] = [
    {storeKey: "blogReducer", reducer: blogReducer, save: false},
    {storeKey: "likeReducer", reducer: likeReducer, save: false},
    {storeKey: "commentsReducer", reducer: commentsReducer, save: false},
]

const BlogPage = () => {
    return (
        <ReducerLoader reducers={reducerLoaded}>
            <div className={style.page}>
                <div className={style.header}>
                    <Text size={enumSized.LARGE}>My blogs</Text>
                </div>
                <BlogList/>
            </div>
        </ReducerLoader>
    )
}

export default BlogPage;