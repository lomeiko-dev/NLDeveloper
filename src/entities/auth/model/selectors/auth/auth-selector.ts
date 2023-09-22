import {IStore} from "app/providers/store";

export const authSelector = (state: IStore) => state.authReducer.data;