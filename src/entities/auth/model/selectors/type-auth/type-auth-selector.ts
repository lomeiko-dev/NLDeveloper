import {IStore} from "app/providers/store";

export const typeAuthSelector = (state: IStore) => state.authReducer.typeAuth || null;