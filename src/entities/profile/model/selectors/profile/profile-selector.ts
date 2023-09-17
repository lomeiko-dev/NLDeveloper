import {IStore} from "app/providers/store";

export const profileSelector = (state: IStore) => state.profileReducer.profile || undefined;