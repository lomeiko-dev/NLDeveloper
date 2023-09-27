import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {LIKE} from "shared/api/consts";
import {ILike} from "../types/like-scheme";
import {uploadLikes} from "../slice/like-slice";

export const getLikesThunk = createAsyncThunk<ILike[], string, IThunk>("like/getCountLike",
    async (id_product, thunkAPI) => {
        try {
            const response =
                await thunkAPI.extra.apiInstance.get<ILike[]>(LIKE + `?id_product_like=${id_product}`)

            thunkAPI.dispatch(uploadLikes(response.data));

            return response.data;
        }
        catch (error){
            console.error((error as Error).message);
            return [];
        }
    })