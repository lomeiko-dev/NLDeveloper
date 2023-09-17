import {IStore} from "app/providers/store";

export const isloadingSelector = (state: IStore) => state.profileReducer.isLoading;