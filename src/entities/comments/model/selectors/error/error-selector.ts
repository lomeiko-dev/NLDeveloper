import {IStore} from "app/providers/store";

export const errorSelector = (state: IStore) => state.commentsReducer?.error;