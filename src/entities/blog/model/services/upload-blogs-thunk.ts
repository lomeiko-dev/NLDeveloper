import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBlog} from "../types/blog-scheme";
import {IThunkExtra} from "app/providers/store";
import {BLOG} from "shared/api";
import {uploadBlogs} from "../slice/blog-slice";

interface IUploadBlogsThunkProps {
    limit: number,
    page: number,
}

interface IUploadBlogsThunk {
    extra: IThunkExtra,
    dispatch: AppDispatch,
    rejectValue: string,
}

export const uploadBlogsThunk = createAsyncThunk<IBlog[], IUploadBlogsThunkProps, IUploadBlogsThunk>("blog/uploadBlogs",
    async ({limit, page}, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.apiInstance.get<IBlog[]>(BLOG + `?_limit=${limit}&_page=${page}`);

            thunkAPI.dispatch(uploadBlogs({
                blogs: response.data,
                totalCount: Number(response.headers["x-total-count"])
            }));

            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })