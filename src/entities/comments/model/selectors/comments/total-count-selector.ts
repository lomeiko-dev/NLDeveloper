import {IStore} from "app/providers/store";

export const totalCountSelector = (state: IStore, id: string) => {
    const count = state.commentsReducer?.totalCounts.find(item => item.id === id);

    if(count)
        return count.count;

    return 0
}