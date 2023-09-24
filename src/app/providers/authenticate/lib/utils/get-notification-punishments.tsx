import {IAuth} from "entities/auth";
import {Notification, notificationType} from "shared/ui/notification/Notification";
import React from "react";

export const getNotificationPunishments = (authData: IAuth): React.ReactNode[] => {
    let notifications: React.ReactNode[] = [];
    const key = Math.random().toString(16).slice(2);

    if(authData.isBlocked){
        notifications.push(<Notification key={key} type={notificationType.WARN}>Ваш аккаунт заблокирован. причина: {authData.reason}</Notification>)
    }

    return notifications;
}