import React, {useEffect} from 'react';
import {useAuth} from "entities/auth";
import {useNavigate} from "react-router-dom";
import {pathRoute} from "shared/config/route";

interface IRequireAuthProps {
    children: React.ReactNode,
}

export const RequireAuth:React.FC<IRequireAuthProps> = ({children}) => {
    const {isAuth} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth){
            navigate(pathRoute.notAuth);
        }
    }, []);

    return children
};