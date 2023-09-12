import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {IStore} from "./types";
import {createReducerManager} from "../lib/utils/reduce-manager";
import {profileReducer} from "entities/profile";

const rootReducers: ReducersMapObject<IStore> = {
    profileReducer: profileReducer
};

export const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch