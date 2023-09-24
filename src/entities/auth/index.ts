export {setAuth, authReducer} from "./model/slice/auth-slice";
export {IAuthScheme, IAuth, typeAuth} from "./model/types/auth-scheme";

export {authThunk} from "./model/services/auth-thunk";

export {authSelector} from "./model/selectors/auth/auth-selector";
export {typeAuthSelector} from "./model/selectors/type-auth/type-auth-selector";

export {useAuth} from "./lib/hooks/useAuth";