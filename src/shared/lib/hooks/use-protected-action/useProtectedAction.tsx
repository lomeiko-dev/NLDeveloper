import {useAuth} from "entities/auth";

export const useProtectedAction = (action: () => void, fail: () => void): () => void => {
    const {authData} = useAuth();
    return () => {
        if(!authData?.isBlocked)
            action();
        else
            fail();
    }
};