import {createAsyncThunk} from "@reduxjs/toolkit";
import {PROFILE} from "shared/api";
import {setProfile} from "../slice/profile-slice";
import {IProfile} from "../types/profile-scheme";
import {IThunkExtra} from "app/providers/store";

interface IGetProfileThunk {
    dispatch: AppDispatch,
    rejectValue: string,
    extra: IThunkExtra
}

export const getProfileThunk = createAsyncThunk<IProfile, void, IGetProfileThunk>("profile/getProfile",
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.apiInstance.get<IProfile>(PROFILE);

            thunkAPI.dispatch(setProfile(response.data));

            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })