import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProfile, IProfileScheme} from "../types/profile-scheme";
import {getProfileThunk} from "../services/get-profile-thunk";

const initialState: IProfileScheme = {
    profile: undefined,
    isLoading: false,
    error: undefined,
}

const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<IProfile>) => {
            state.profile = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileThunk.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(getProfileThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(getProfileThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

                console.error(action.payload);
            })
    }
})

export const profileReducer = profileSlice.reducer;

export const {setProfile} = profileSlice.actions;