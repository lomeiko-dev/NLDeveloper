import {IProfileScheme} from "entities/profile";
import {IProfileDataScheme} from "entities/profile-data";
import {IBlogScheme} from "entities/blog";

import {AxiosInstance} from "axios";

export interface IStore {
    profileReducer: IProfileScheme,

    // async reducers
    profileDataReducer?: IProfileDataScheme,
    blogReducer?: IBlogScheme
}

export interface IThunkExtra {
    apiInstance: AxiosInstance,
}

export type storeKey = keyof IStore;