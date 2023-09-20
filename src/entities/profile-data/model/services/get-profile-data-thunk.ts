import {createAsyncThunk} from "@reduxjs/toolkit";
import {setProfileData} from "../slice/profile-data-slice";
import {IProfileData} from "../typs/profile-data-scheme";
import {PROFILE_DATA} from "shared/api";
import {IThunk} from "app/providers/store";

export const getProfileDataThunk = createAsyncThunk<IProfileData, void, IThunk>("profileData/getProfileData",
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.apiInstance.get<IProfileData>(PROFILE_DATA);

            thunkAPI.dispatch(setProfileData(response.data));

            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })