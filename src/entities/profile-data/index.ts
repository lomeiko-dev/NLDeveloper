export {profileDataReducer, setProfileData} from "./model/slice/profile-data-slice";

export {IProfileDataScheme, IProfileData} from "./model/typs/profile-data-scheme";

export {getProfileDataThunk} from "./model/services/get-profile-data-thunk";

export {errorSelector} from "./model/selectors/error/error-selector";
export {profileDataSelector} from "./model/selectors/profile-data/profile-data-selector";
export {isLoadingSelector} from "./model/selectors/isloading/isloading-selector";

export {ProfileData} from "./ui/ProfileData";