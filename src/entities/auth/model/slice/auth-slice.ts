import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuth, IAuthScheme} from "../types/auth-scheme";

const initialState: IAuthScheme = {
    data: undefined,
    typeAuth: undefined,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<IAuthScheme>) => {
            state.data = action.payload.data;
            state.typeAuth = action.payload.typeAuth;
        }
    }
})

export const authReducer = authSlice.reducer;

export const {setAuth} = authSlice.actions;