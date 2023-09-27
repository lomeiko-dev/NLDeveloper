import {typeAuth} from "entities/auth";
import React from "react";
import {Notification, notificationType} from "shared/ui/notification/Notification";

export const getNotificationByTypeAuth = (type: typeAuth | null) => {
    switch (type){
        case "auth":
            return (<Notification key={type} type={notificationType.ACCEPT}>Вы успешно авторизированы на сайте</Notification>)
        case "reg":
            return (<Notification key={type} type={notificationType.ACCEPT}>Вы успешно зарегестрированы на сайте</Notification>)
        case "none":
            return (<Notification key={type} type={notificationType.ERROR}>Ошибка. Не удалось авторизироваться</Notification>)
    }
}