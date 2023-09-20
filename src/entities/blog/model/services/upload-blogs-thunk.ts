import {createAsyncThunk} from "@reduxjs/toolkit";
import {IBlog} from "../types/blog-scheme";
import {IThunk} from "app/providers/store";
import {BLOG} from "shared/api";
import {uploadBlogs} from "../slice/blog-slice";

interface IUploadBlogsThunkProps {
    limit: number,
    page: number,
}

export const uploadBlogsThunk = createAsyncThunk<IBlog[], IUploadBlogsThunkProps, IThunk>("blog/uploadBlogs",
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