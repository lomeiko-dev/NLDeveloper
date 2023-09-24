import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILikeProps} from "../types/like-thunk-props";
import {IThunk} from "app/providers/store";
import {ILike} from "../types/like";
import {LIKE} from "shared/api/consts";

export const getIsLikeThunk = createAsyncThunk<boolean, ILikeProps, IThunk>("like/getIsLike",
    async ({id_user, id_product}, thunkAPI) => {
        try{
            const response =
                await thunkAPI.extra.apiInstance.get<ILike[]>(LIKE + `?id_user=${id_user}&id_product=${id_product}`)
                    .then(res => res.data[0]);

            return response !== undefined
        }
        catch (error){
            return false;
        }
    })