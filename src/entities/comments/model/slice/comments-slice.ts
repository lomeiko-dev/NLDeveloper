import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment, ICommentsScheme} from "../types/comments-sheme";

const initialState: ICommentsScheme = {
    comments: [],
    idChanged: undefined,
}

const commentsSlice = createSlice({
    name: "comments",
    initialState: initialState,
    reducers: {
        uploadComments: (state, action: PayloadAction<IComment[]>) => {
            state.comments = [...state.comments, ...action.payload];
        },
        addComment: (state, action: PayloadAction<IComment>) => {
            state.comments.unshift(action.payload);
        },
        removeComment: (state, action: PayloadAction<string>) => {
            state.comments = state.comments.filter(item => item.id !== action.payload);
        },
        setIdChanged: (state, action: PayloadAction<string>) => {
            state.idChanged = action.payload;
        },
        changeComment: (state, action: PayloadAction<{id: string, data: IComment}>) => {
            const comment = state.comments.find(item => item.id === action.payload.id);

            if(comment !== undefined){
                comment.name = action.payload.data.name;
                comment.body = action.payload.data.body;
            }
            state.idChanged = undefined;
        }
    }
})

export const commentsReducer = commentsSlice.reducer;
export const {uploadComments,
              addComment,
              removeComment,
              changeComment,
              setIdChanged} = commentsSlice.actions;