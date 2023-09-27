import {createAsyncThunk} from "@reduxjs/toolkit";
import {IComment} from "../types/comments-sheme";
import {IThunk} from "app/providers/store";
import {COMMENTS} from "shared/api/consts";


export const getCommentsCountThunk = createAsyncThunk<number, string, IThunk>("comments/getCommentsCount",
    async (id_product, thunkAPI) => {
        try {
            const count =
                await thunkAPI.extra.apiInstance.get<IComment[]>(COMMENTS + `?id_product_like=${id_product}`)
                    .then(res => res.data.length);

            return count;
        }
        catch (error){
            console.error((error as Error).message);
            return 0;
        }
    })