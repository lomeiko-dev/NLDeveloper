import {IStore} from "app/providers/store/config/types";

export const isloadingSelector = (state: IStore) => state.profileReducer.isLoading;