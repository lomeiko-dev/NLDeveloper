import React, {useEffect} from "react";
import style from './Notification.module.scss';
import classNames from "classnames";
import {Panel, panelStyled} from "../panel/Panel";

export enum notificationType {
    ERROR = "error",
    WARN = "warn",
    ACCEPT = "accept"
}

interface INotificationProps {
    children: React.ReactNode,
    className?: string,
    type?: notificationType,
}

export const Notification: React.FC<INotificationProps> = (props) => {
    const {
        children,
        className,
        type = notificationType.ACCEPT,
    } = props;

    return (
        <Panel styled={panelStyled.SHADOW} className={classNames(style.notification, className, style[type])}>
            {children}
        </Panel>
    );
};