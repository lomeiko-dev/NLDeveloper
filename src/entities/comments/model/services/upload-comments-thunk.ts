import {createAsyncThunk} from "@reduxjs/toolkit";
import {IComment} from "../types/comments-sheme";
import {IThunk} from "app/providers/store";
import {COMMENTS} from "shared/api/consts";
import {uploadComments} from "../slice/comments-slice";

interface IUploadCommentsThunkProps {
    id_product: string,
    page: number,
    limit: number,
}

export const uploadCommentsThunk = createAsyncThunk<IComment[], IUploadCommentsThunkProps, IThunk>("comments/uploadComments",
    async ({id_product, page, limit}, thunkAPI) => {
        try {
            const response =
                await thunkAPI.extra.apiInstance.get<IComment[]>(COMMENTS + `?id_product_like=${id_product}&_limit=${limit}&_page=${page}`);

            thunkAPI.dispatch(uploadComments({
                comments: response.data,
                totalCounts: {id: id_product, count: response.headers["x-total-count"]}
            }));

            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })