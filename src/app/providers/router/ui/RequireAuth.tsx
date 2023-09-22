import React from 'react';
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {authSelector} from "entities/auth";
import {useLocation} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {pathRoute} from "shared/config/route";

interface IRequireAuthProps {
    children: React.ReactNode,
}

export const RequireAuth:React.FC<IRequireAuthProps> = ({children}) => {
    const authData = useAppSelector(authSelector);
    const location = useLocation();

    if(authData === undefined){
        return <Navigate to={pathRoute.notAuth} state={{from: location}} replace />
    }

    return children
};