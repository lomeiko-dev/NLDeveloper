import React, {useContext, useState} from "react";
import classNames from "classnames";
import style from "./Like.module.scss";

import {Button, buttonStyled} from "shared/ui/button/Button";
import {Notification, notificationType} from "shared/ui/notification/Notification";
import {enumSized} from "shared/ui/types";

import {toggleLikeThunk} from "../services/toggle-like-thunk";

import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useAuth} from "entities/auth";
import {useProtectedAction} from "shared/lib/hooks/use-protected-action/useProtectedAction";

import {NotificationContext} from "shared/config/notification/notification-context";

interface ILikeProps {
    like_count: number,
    isActive: boolean,
    id_product: string,
}

export const Like: React.FC<ILikeProps> = React.memo(({like_count ,id_product, isActive}) => {
    const setNotification = useContext(NotificationContext);
    const dispatch = useAppDispatch();
    const {authData} = useAuth();

    const [loading, setLoading] = useState(false);

    const toggleLike = useProtectedAction(() => {
        setLoading(true)
        dispatch(toggleLikeThunk({id_user: authData?.id || "-1", id_product:id_product})).finally(() => setLoading(false));
    }, () => setNotification(<Notification type={notificationType.WARN}>Вы заблокированы по причине: {authData?.reason}</Notification>));

    const mods = { [style.active]: isActive }
    return (
        <Button styled={buttonStyled.NONE}
                className={classNames(style.click, mods)}
                onClick={toggleLike}
                disabled={loading}
                size={enumSized.MIDDLE}>❤ {like_count} </Button>
    );
});