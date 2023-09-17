import style from "./BlogPage.module.scss";

import {BlogList} from "widgets/blog";
import {Text} from "shared/ui/text/Text";
import {ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";
import {enumSized} from "shared/ui/types";

import {blogReducer} from "entities/blog";

const BlogPage = () => {
    return (
        <ReducerLoader storeKey={"blogReducer"} reducer={blogReducer} save={false}>
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