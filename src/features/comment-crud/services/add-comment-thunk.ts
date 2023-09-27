import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {COMMENTS} from "shared/api/consts";
import {addComment, IComment} from "entities/comments";

export const addCommentThunk = createAsyncThunk<void, IComment, IThunk>("addComment",
    async (comment, thunkAPI) => {
        try {
            const response =
                await thunkAPI.extra.apiInstance.post(COMMENTS, comment);

            thunkAPI.dispatch(addComment(response.data));
        }
        catch (error){
            console.error((error as Error).message)
        }
    })