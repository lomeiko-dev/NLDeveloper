import React, {useContext, useEffect} from 'react';
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";

import {authThunk, useAuth} from "entities/auth";

import {getNotificationByTypeAuth} from "../lib/utils/get-notification-type-auth";
import {getNotificationPunishments} from "../lib/utils/get-notification-punishments";
import {NotificationContext} from "shared/config/notification/notification-context";

interface IAuthenticateProviderProps {
    children: React.ReactNode,
}

export const AuthenticateProvider: React.FC<IAuthenticateProviderProps> = ({children}) => {
    const dispatch = useAppDispatch();
    const { authData, typeAuth } = useAuth();
    const setNotifications = useContext(NotificationContext);

    useEffect(() => {
        dispatch(authThunk());
    }, []);

    setNotifications(
        <>
            {getNotificationByTypeAuth(typeAuth)}
            {authData && getNotificationPunishments(authData)}
        </>
    )

    return children
};