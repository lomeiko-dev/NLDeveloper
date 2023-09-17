import {IStore} from "app/providers/store";

export const isLoadingSelector = (state: IStore) => state.blogReducer?.isLoading || false;