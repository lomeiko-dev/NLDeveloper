import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAuth, typeAuth} from "../types/auth-scheme";
import {IThunk} from "app/providers/store";
import {getDeviceId} from "../../lib/utils/get-device-id";
import {AUTH} from "shared/api/consts";
import {setAuth} from "../slice/auth-slice";

export const authThunk = createAsyncThunk<void, void, IThunk>("auth/authThunk",
    async (_, thunkAPI) => {
        try {
            const device_id = getDeviceId();
            let typeAuth: typeAuth = "auth";

            let data =
                await thunkAPI.extra.apiInstance.get<IAuth[]>(AUTH + `?q=${device_id}`)
                    .then(res => res.data[0]);

            // registration
            if(data === undefined){
                data = await thunkAPI.extra.apiInstance.post<IAuth>(AUTH, {
                    id: null,
                    idDevice: device_id,
                    isBlocked: false,
                }).then(res => res.data);
                typeAuth = "reg";
            }

            thunkAPI.dispatch(setAuth({data: data, typeAuth: data !== undefined ? typeAuth : "none" }));
        }
        catch (error){
            thunkAPI.dispatch(setAuth({data: undefined, typeAuth: "none" }));
        }
    })