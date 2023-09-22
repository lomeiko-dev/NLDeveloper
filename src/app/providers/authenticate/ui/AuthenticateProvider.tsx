import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

import {authSelector, authThunk, typeAuthSelector} from "entities/auth";

import {Notification, notificationType} from "shared/ui/notification/Notification";
import {NotificationWrapper} from "shared/ui/notification/wrapper/NotificationWrapper";

import {getNotificationByTypeAuth} from "../lib/utils/get-notification-type-auth";

interface IAuthenticateProviderProps {
    children: React.ReactNode,
}

export const AuthenticateProvider: React.FC<IAuthenticateProviderProps> = ({children}) => {
    const [isOpen, setOpen] = useState<boolean>(true);

    const dispatch = useAppDispatch();

    const authData = useAppSelector(authSelector);
    const typeAuth = useAppSelector(typeAuthSelector);

    useEffect(() => {
        dispatch(authThunk());
    }, []);

    let notifications: React.ReactNode[] = Array(getNotificationByTypeAuth(typeAuth));
    if(authData?.isBlocked)
        notifications.push(<Notification key={authData.reason} type={notificationType.WARN}>Ваш аккаунт заблокирован. причина: {authData.reason}</Notification>)

    return (
        <>
            {children}
            {isOpen && <NotificationWrapper onClosed={() => setOpen(false)}>{notifications}</NotificationWrapper>}
        </>
    )
};