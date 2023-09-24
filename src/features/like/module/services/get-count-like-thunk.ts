import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {LIKE} from "shared/api/consts";
import {ILike} from "../types/like";


export const getCountLikeThunk = createAsyncThunk<number, string, IThunk>("like/getCountLike",
    async (id_product, thunkAPI) => {
        try {
            const count =
                await thunkAPI.extra.apiInstance.get<ILike[]>(LIKE + `?id_product_like=${id_product}`)
                    .then(res => res.data.length);

            return count;
        }
        catch (error){
            return -1;
        }
    })