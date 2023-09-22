import React, {useEffect} from "react";
import style from './NotificationWrapper.module.scss';
import classNames from "classnames";

export enum notificationPosition {
    TOPLEFT = "top_left",
    TOPRIGHT = "top_right",
    BOTTOMLEFT = "bottom_left",
    BOTTOMRIGHT = "bottom_right",
}

interface INotificationWrapperProps {
    children: React.ReactNode,
    position?: notificationPosition,
    onClosed: () => void,
}

const TIMEOUT = 7000;
export const NotificationWrapper:React.FC<INotificationWrapperProps> = (props) => {
    const {
        children,
        position = notificationPosition.BOTTOMRIGHT,
        onClosed,
    } = props;

    useEffect(() => {
        setTimeout(() => {
            onClosed();
        }, TIMEOUT)
    }, []);

    return (
        <div className={classNames(style.wrapper, style[position])}>
            {children}
        </div>
    );
};