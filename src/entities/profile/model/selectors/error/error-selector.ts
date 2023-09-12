import {IStore} from "app/providers/store/config/types";

export const errorSelector = (state: IStore) => state.profileReducer.error;