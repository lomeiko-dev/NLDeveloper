export {profileReducer, setProfile} from "./model/slice/profile-slice";

export {IProfileScheme} from "./model/types/profile-scheme";

export {getProfileThunk} from "./model/services/get-profile-thunk";

export {profileSelector} from "./model/selectors/profile/profile-selector";
export {isloadingSelector} from "./model/selectors/is-loading/isloading-selector";
export {errorSelector} from "./model/selectors/error/error-selector";

export {Profile} from "./ui/profile/Profile";
export {Author} from "./ui/author/Author";