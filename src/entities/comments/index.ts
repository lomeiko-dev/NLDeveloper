export {uploadComments, commentsReducer, addComment, removeComment, changeComment, setIdChanged} from "./model/slice/comments-slice";
export {ICommentsScheme, IComment} from "./model/types/comments-sheme";

export {commentsSelector} from "./model/selectors/comments/comments-selector";
export {getChangedSelector} from "./model/selectors/changed/get-changed-selector";
export {isLoadingSelector} from "./model/selectors/is-loading/is-loading-selector";
export {errorSelector} from "./model/selectors/error/error-selector";

export {uploadCommentsThunk} from "./model/services/upload-comments-thunk";
export {getCommentsCountThunk} from "./model/services/get-comments-count-thunk";

export {CommentCard} from "./ui/CommentCard";