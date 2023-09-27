export {ILikeScheme, ILike} from "./model/types/like-scheme";
export {isLikedSelector} from "./model/selectors/likes/is-liked-selector";
export {likeCountSelector} from "./model/selectors/likes/like-count-selector";
export {setLike, removeLike, likeReducer} from "./model/slice/like-slice";
export {getLikesThunk} from "./model/services/get-likes-thunk"