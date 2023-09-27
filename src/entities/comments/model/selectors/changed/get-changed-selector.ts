import {IStore} from "app/providers/store";

export const getChangedSelector = (state: IStore) => {
    const id = state.commentsReducer?.idChanged;
    if(id !== undefined)
        return state.commentsReducer?.comments.find(item => item.id === id);
}