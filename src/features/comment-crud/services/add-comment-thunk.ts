import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {COMMENTS} from "shared/api/consts";
import {addComment, IComment} from "entities/comments";
import {generateID} from "shared/lib/utils/generateID";

interface IAddCommentThunkProps extends Omit<IComment, 'id'>{}

export const addCommentThunk = createAsyncThunk<void, IAddCommentThunkProps, IThunk>("addComment",
    async (commentProps, thunkAPI) => {
        try {
            const comment: IComment = {
                id: generateID(),
                ...commentProps
            }

            const response =
                await thunkAPI.extra.apiInstance.post(COMMENTS, comment);

            thunkAPI.dispatch(addComment(response.data));
        }
        catch (error){
            console.error((error as Error).message)
        }
    })