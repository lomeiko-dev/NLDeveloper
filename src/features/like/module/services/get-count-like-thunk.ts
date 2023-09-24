import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {LIKE} from "shared/api/consts";
import {ILike} from "../types/like";

interface IGetCountLikeThunkProps {
    id_product: string,
    id_user: string
}
export interface IGetCountLikeThunkReturned {
    count: number,
    isLicked: boolean,
}

export const getCountLikeThunk = createAsyncThunk<IGetCountLikeThunkReturned, IGetCountLikeThunkProps, IThunk>("like/getCountLike",
    async ({id_user, id_product}, thunkAPI) => {
        try {
            const count =
                await thunkAPI.extra.apiInstance.get<ILike[]>(LIKE + `?id_product_like=${id_product}`)
                    .then(res => res.data.length);

            const isLicked =
                await thunkAPI.extra.apiInstance.get<ILike[]>(LIKE + `?id_product_like=${id_product}&id_user=${id_user}`)
                    .then(res => res.data[0] !== undefined);

            return {count: count, isLicked: isLicked};
        }
        catch{
            return {count: 0, isLicked: false};
        }
    })