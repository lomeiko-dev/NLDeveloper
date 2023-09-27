import {IStore} from "app/providers/store";

export const likeCountSelector = (state: IStore, id: string) =>
    state.likeReducer?.likes.filter(item => item.id_product === id).length || 0;