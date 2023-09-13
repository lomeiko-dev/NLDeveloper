import {IStore} from "app/providers/store";

export const profileDataSelector = (state: IStore) => state.profileDataReducer?.profileData;