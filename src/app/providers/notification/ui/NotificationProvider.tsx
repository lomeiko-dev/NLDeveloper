import React, {useState} from 'react';
import style from "./NotificationProvider.module.scss";
import {NotificationContext} from "shared/config/notification/notification-context";

interface INotificationProviderProps {
    children: React.ReactNode,
}

export const NotificationProvider: React.FC<INotificationProviderProps> = ({children}) => {
    const [notifications, setNotifications] = useState<React.ReactNode>();

    return (
        <NotificationContext.Provider value={setNotifications}>
            {children}
            <div className={style.wrapper}>
                {notifications}
            </div>
        </NotificationContext.Provider>
    );
};