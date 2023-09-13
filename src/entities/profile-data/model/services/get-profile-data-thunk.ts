import {createAsyncThunk} from "@reduxjs/toolkit";
import {setProfileData} from "../slice/profile-data-slice";
import {IProfileData} from "../typs/profile-data-scheme";
import {PROFILE_DATA} from "shared/api/consts";
import {IThunkExtra} from "app/providers/store";

interface IGetProfileDataThunk {
    dispatch: AppDispatch,
    rejectValue: string,
    extra: IThunkExtra,
}

export const getProfileDataThunk = createAsyncThunk<IProfileData, void, IGetProfileDataThunk>("profileData/getProfileData",
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