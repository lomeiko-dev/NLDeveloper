import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {LIKE} from "shared/api/consts";
import {ILike} from "../types/like";

interface IToggleLikeThunkProps {
    id_product: string,
    id_user: string,
}
export const toggleLikeThunk = createAsyncThunk<void, IToggleLikeThunkProps, IThunk>("like/toggleLike",
    async ({id_product, id_user}, thunkAPI) => {
        try {
            const like =
                await thunkAPI.extra.apiInstance.get<ILike[]>(LIKE + `?id_user_like=${id_user}&id_product_like=${id_product}`)
                    .then(res => res.data[0])

            if(like === undefined){
                const response = await thunkAPI.extra.apiInstance.post<ILike>(LIKE, {
                    id_user: id_user,
                    id_product: id_product,
                });
            }
            else{
                const response =
                    await thunkAPI.extra.apiInstance.delete(LIKE + `/${like.id}`);
            }
        }
        catch (error){
        }
    });