import {IStore} from "app/providers/store";

export const errorSelector = (state: IStore) => state.profileReducer.error;