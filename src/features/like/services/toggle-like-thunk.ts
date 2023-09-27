import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {LIKE} from "shared/api/consts";
import {removeLike, setLike} from "entities/likes";
import {ILike} from "entities/likes";

interface IToggleLikeThunkProps {
    id_user: string,
    id_product: string,
}

export const toggleLikeThunk = createAsyncThunk<void, IToggleLikeThunkProps, IThunk>("like/toggleLike",
    async ({id_product, id_user}, thunkAPI) => {
        try {
            const like =
                thunkAPI.getState().likeReducer?.likes.find(item => item.id_product === id_product && item.id_user === id_user)

            if(like === undefined){
                const response =
                    await thunkAPI.extra.apiInstance.post<ILike>(LIKE, { id_user: id_user, id_product: id_product});
                thunkAPI.dispatch(setLike(response.data));
            }
            else{
                await thunkAPI.extra.apiInstance.delete(LIKE + `/${like.id}`);
                thunkAPI.dispatch(removeLike(like.id));
            }
        }
        catch (error){
            console.error((error as Error).message);
        }
    });