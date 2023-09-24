import React, {useEffect, useMemo, useState} from 'react';
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";

import {authThunk, useAuth} from "entities/auth";
import {NotificationWrapper} from "shared/ui/notification/wrapper/NotificationWrapper";

import {getNotificationByTypeAuth} from "../lib/utils/get-notification-type-auth";
import {getNotificationPunishments} from "../lib/utils/get-notification-punishments";

interface IAuthenticateProviderProps {
    children: React.ReactNode,
}

export const AuthenticateProvider: React.FC<IAuthenticateProviderProps> = ({children}) => {
    const dispatch = useAppDispatch();
    const { authData, typeAuth } = useAuth();

    const [isOpen, setOpen] = useState<boolean>(true);

    useEffect(() => {
        dispatch(authThunk());
    }, []);

    let notifications: React.ReactNode[] = useMemo(() => ([
        getNotificationByTypeAuth(typeAuth),
        authData && getNotificationPunishments(authData),
    ]), [authData, typeAuth]);

    return (
        <>
            {children}
            {isOpen && <NotificationWrapper onClosed={() => setOpen(false)}>{notifications}</NotificationWrapper>}
        </>
    )
};