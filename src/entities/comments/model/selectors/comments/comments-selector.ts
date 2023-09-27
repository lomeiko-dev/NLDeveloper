import {IStore} from "app/providers/store";

export const commentsSelector = (state: IStore, id_product: string) =>
    state.commentsReducer?.comments.filter(item => item.id_product === id_product) || []