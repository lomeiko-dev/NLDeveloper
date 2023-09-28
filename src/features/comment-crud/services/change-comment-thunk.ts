import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {COMMENTS} from "shared/api/consts";
import {changeComment, IComment} from "entities/comments";

export const changeCommentThunk = createAsyncThunk<void, IComment, IThunk>("changeComment",
    async (comment, thunkAPI) => {
        try {

            const response =
                await thunkAPI.extra.apiInstance.put<IComment>(COMMENTS + `/${comment.id}`, comment);

            thunkAPI.dispatch(changeComment({id: comment.id, data: response.data}));
        }
        catch (error){
            console.error((error as Error).message)
        }
    })