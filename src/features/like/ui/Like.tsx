import React, {useContext, useEffect, useState} from "react";
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
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {getLikesThunk, isLikedSelector, likeCountSelector} from "entities/likes";

interface ILikeProps {
    id_product: string,
}

export const Like: React.FC<ILikeProps> = React.memo(({id_product}) => {
    const setNotification = useContext(NotificationContext);
    const dispatch = useAppDispatch();
    const {authData} = useAuth();

    const likes_count = useAppSelector(state => likeCountSelector(state, id_product));
    const isLiked = useAppSelector(state => isLikedSelector(state, id_product, authData?.id || "-1"))

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getLikesThunk(id_product));
    }, []);

    const toggleLike = useProtectedAction(() => {
        setLoading(true);
        dispatch(toggleLikeThunk({id_user: authData?.id || "-1", id_product: id_product}))
            .finally(() => setLoading(false));
    }, () => setNotification(<Notification type={notificationType.WARN}>Вы заблокированы по причине: {authData?.reason}</Notification>));

    const mods = { [style.active]: isLiked }
    return (
        <Button styled={buttonStyled.NONE}
                className={classNames(style.click, mods)}
                onClick={toggleLike}
                disabled={loading}
                size={enumSized.MIDDLE}>❤ {likes_count} </Button>
    );
});