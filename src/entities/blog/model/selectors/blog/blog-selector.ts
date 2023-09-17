import {IStore} from "app/providers/store";

export const blogSelector = (state: IStore) => state.blogReducer?.blogs || undefined;