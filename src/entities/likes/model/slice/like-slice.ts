import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ILike, ILikeScheme} from "../types/like-scheme";
import {getLikesThunk} from "../services/get-likes-thunk";

const initialState: ILikeScheme = {
    likes: [],
    isLoading: false,
}

const likeSlice = createSlice({
    name: "like",
    initialState: initialState,
    reducers: {
        uploadLikes: (state, action: PayloadAction<ILike[]>) => {
            state.likes = [...state.likes, ...action.payload]
        },
        setLike: (state, action: PayloadAction<ILike>) => {
            state.likes.push(action.payload);
        },
        removeLike: (state, action: PayloadAction<string>) => {
            state.likes = state.likes.filter(item => item.id !== action.payload)
        }
    }
})

export const likeReducer = likeSlice.reducer;
export const {uploadLikes, setLike, removeLike} = likeSlice.actions;