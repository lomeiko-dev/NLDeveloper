import {IStore} from "app/providers/store";

export const totalCountSelector = (state: IStore) => state.blogReducer?.totalCount || 0;