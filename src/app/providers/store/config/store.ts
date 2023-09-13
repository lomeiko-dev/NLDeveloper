import {CombinedState, configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {IStore} from "./types";
import {createReducerManager} from "../lib/utils/reduce-manager";
import {profileReducer} from "entities/profile";
import {baseInstance} from "shared/api";

const rootReducers: ReducersMapObject<IStore> = {
    profileReducer: profileReducer
};

export const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStore>>,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                apiInstance: baseInstance,
            }
        }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch