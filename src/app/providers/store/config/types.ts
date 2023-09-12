import {IProfileScheme} from "entities/profile";
import {IProfileDataScheme} from "entities/profile-data";

export interface IStore {
    profileReducer: IProfileScheme,

    // async reducers
    profileDataReducer?: IProfileDataScheme,
}

export type storeKey = keyof IStore;