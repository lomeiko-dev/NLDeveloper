import {useMemo} from 'react';
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {authSelector} from "../../model/selectors/auth/auth-selector";
import {typeAuthSelector} from "../../model/selectors/type-auth/type-auth-selector";

export const useAuth = () => {
    const authData = useAppSelector(authSelector);
    const typeAuth = useAppSelector(typeAuthSelector);

    const result = useMemo(() => ({
        isAuth: authData !== undefined,
        typeAuth: typeAuth,
        authData: authData,
    }), [authData, typeAuth]);

    return result;
};