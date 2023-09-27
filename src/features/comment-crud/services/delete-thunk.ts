import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {COMMENTS} from "shared/api/consts";
import {removeComment} from "entities/comments";

export const deleteThunk = createAsyncThunk<void, string, IThunk>("comment/delete",
    async (id, thunkAPI) => {
        try {
            await thunkAPI.extra.apiInstance.delete(COMMENTS + `/${id}`);
            thunkAPI.dispatch(removeComment(id));
        }
        catch (error){
            console.error((error as Error).message);
        }
    })