import {typeAuth} from "entities/auth";
import React from "react";
import {Notification, notificationType} from "shared/ui/notification/Notification";

export const getNotificationByTypeAuth = (type: typeAuth | null) => {
    if(type !== null){
        const typesAuth: Record<typeAuth, React.ReactNode> = {
            auth:
                <Notification key={type} type={notificationType.ACCEPT}>Вы успешно авторизированы на сайте</Notification>,
            reg:
                <Notification key={type} type={notificationType.ACCEPT}>Вы успешно зарегестрированы на сайте</Notification>,
            none:
                <Notification key={type} type={notificationType.ERROR}>Ошибка. Не удалось авторизироваться</Notification>
        }

        return typesAuth[type];
    }
}