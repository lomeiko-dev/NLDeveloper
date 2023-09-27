import {IProfileScheme} from "entities/profile";
import {IProfileDataScheme} from "entities/profile-data";
import {IBlogScheme} from "entities/blog";

import {AxiosInstance} from "axios";
import {IAuthScheme} from "entities/auth/model/types/auth-scheme";
import {ILikeScheme} from "entities/likes";
import {RootState} from "./store";
import {ICommentsScheme} from "entities/comments/model/types/comments-sheme";

export interface IStore {
    authReducer: IAuthScheme,
    profileReducer: IProfileScheme,

    // async reducers
    profileDataReducer?: IProfileDataScheme,
    blogReducer?: IBlogScheme,
    likeReducer?: ILikeScheme,
    commentsReducer?: ICommentsScheme,
}

export interface IThunk {
    extra: IThunkExtra,
    dispatch: AppDispatch,
    rejectValue: string,
    state: RootState,
}

interface IThunkExtra {
    apiInstance: AxiosInstance,
}

export type storeKey = keyof IStore;