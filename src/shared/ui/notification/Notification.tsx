import React, {useEffect, useState} from "react";
import style from './Notification.module.scss';
import classNames from "classnames";
import {Panel, panelStyled} from "../panel/Panel";

export enum notificationType {
    ERROR = "error",
    WARN = "warn",
    ACCEPT = "accept"
}

export interface INotificationProps {
    children: React.ReactNode,
    className?: string,
    type?: notificationType,
}

const TIMEOUT_CLOSED = 7000;
export const Notification: React.FC<INotificationProps> = (props) => {
    const {
        children,
        className,
        type = notificationType.ACCEPT,
    } = props;

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, TIMEOUT_CLOSED);
    }, []);

    return (
        <>
            {open &&
                <Panel styled={panelStyled.SHADOW} className={classNames(style.notification, className, style[type])}>
                    {children}
                </Panel>}
        </>
    )
};