import {IStore} from "app/providers/store";

export const isLikedSelector = (state: IStore, id_product: string, id_user: string) =>
    state.likeReducer?.likes.find(item => item.id_product === id_product && item.id_user === id_user) !== undefined;