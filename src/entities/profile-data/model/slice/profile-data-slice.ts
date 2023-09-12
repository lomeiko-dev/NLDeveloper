import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getProfileDataThunk} from "../services/get-profile-data-thunk";
import {IProfileData, IProfileDataScheme} from "../typs/profile-data-scheme";

const initialState: IProfileDataScheme = {
    profileData: undefined,
    isLoading: false,
    error: undefined
}

const profileDataSlice = createSlice({
    name: "profileData",
    initialState: initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<IProfileData>) => {
            state.profileData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileDataThunk.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(getProfileDataThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(getProfileDataThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

                console.error(action.payload);
            })
    }
})

export const profileDataReducer = profileDataSlice.reducer;

export const {setProfileData} = profileDataSlice.actions;