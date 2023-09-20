import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBlog, IBlogScheme} from "../types/blog-scheme";
import {uploadBlogsThunk} from "../services/upload-blogs-thunk";

const initialState: IBlogScheme = {
    blogs: [],
    totalCount: 0,
    isLoading: true,
    error: undefined,
}

const blogSlice = createSlice({
    name: "blog",
    initialState: initialState,
    reducers: {
        uploadBlogs: (state, action: PayloadAction<{blogs: IBlog[], totalCount: number}>) => {
            state.blogs = [...state.blogs, ...action.payload.blogs];
            state.totalCount = action.payload.totalCount;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadBlogsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(uploadBlogsThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(uploadBlogsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const blogReducer = blogSlice.reducer;
export const {uploadBlogs} = blogSlice.actions;