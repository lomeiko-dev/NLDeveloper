import {IStore} from "app/providers/store/config/types";

export const profileDataSelector = (state: IStore) => state.profileDataReducer?.profileData;