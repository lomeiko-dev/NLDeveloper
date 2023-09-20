import {createAsyncThunk} from "@reduxjs/toolkit";
import {PROFILE} from "shared/api";
import {setProfile} from "../slice/profile-slice";
import {IProfile} from "../types/profile-scheme";
import {IThunk} from "app/providers/store";


export const getProfileThunk = createAsyncThunk<IProfile, void, IThunk>("profile/getProfile",
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