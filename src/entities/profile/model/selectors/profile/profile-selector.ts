import {IStore} from "app/providers/store/config/types";

export const profileSelector = (state: IStore) => state.profileReducer.profile;