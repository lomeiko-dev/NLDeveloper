import {IStore} from "app/providers/store/config/types";

export const isLoadingSelector = (state: IStore) => state.profileDataReducer?.isLoading;