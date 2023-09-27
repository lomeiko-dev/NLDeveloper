import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {COMMENTS} from "shared/api/consts";
import {changeComment, IComment} from "entities/comments";

interface IChangeCommentThunk {
    data: IComment,
    id: string,
}

export const changeCommentThunk = createAsyncThunk<void, IChangeCommentThunk, IThunk>("changeComment",
    async ({id, data}, thunkAPI) => {
        try {
            const response =
                await thunkAPI.extra.apiInstance.put<IComment>(COMMENTS + `/${id}`, data);

            thunkAPI.dispatch(changeComment({id: id, data: response.data}));
        }
        catch (error){
            console.error((error as Error).message)
        }
    })