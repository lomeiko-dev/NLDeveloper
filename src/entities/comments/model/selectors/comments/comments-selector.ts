import {IStore} from "app/providers/store";
import {createSelector} from "@reduxjs/toolkit";

export const commentsSelector = createSelector(
    (state: IStore) => state.commentsReducer?.comments,
    (_: IStore, id_product: string) => id_product,
    (comments, id_product) => comments && comments.filter(item => item.id_product === id_product) || []
)