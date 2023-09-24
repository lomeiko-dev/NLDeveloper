import React, {useEffect, useState} from "react";
import style from "./Like.module.scss";

import {Text} from "shared/ui/text/Text";
import {NotificationWrapper} from "shared/ui/notification/wrapper/NotificationWrapper";
import {enumSized} from "shared/ui/types";

import {getCountLikeThunk, IGetCountLikeThunkReturned} from "../module/services/get-count-like-thunk";
import {toggleLikeThunk} from "../module/services/toggle-like-thunk";

import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useAuth} from "entities/auth";

import classNames from "classnames";
import {unwrapResult} from "@reduxjs/toolkit";

import {ILikeProps} from "../module/types/like-thunk-props";
import {getNotificationPunishments} from "app/providers/authenticate";

export const Like: React.FC<ILikeProps> = React.memo(({id_user, id_product}) => {
    const dispatch = useAppDispatch();
    const {authData} = useAuth();

    const [likes, setLikes] =
        useState<IGetCountLikeThunkReturned>({count: 0, isLicked: false});

    const [fetching, setFetching] = useState(false);

    const [isOpen, setOpen] = useState(true);
    const [notifications, setNotifications] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        dispatch(getCountLikeThunk({id_user, id_product}))
            .then(unwrapResult).then(res => setLikes(res))
            .finally(() => setFetching(false));
    }, [fetching]);

    const toggleLike = () => {
        const notifications: React.ReactNode[] = authData && getNotificationPunishments(authData) || [];

        if(notifications.length !== 0){
            setNotifications(notifications);
            setOpen(true);
            return;
        }

        dispatch(toggleLikeThunk({id_user: id_user, id_product:id_product}));
        setFetching(true);
    }

    const mods = { [style.active]: likes.isLicked }
    return (
        <>
            <Text
                className={classNames(style.click, mods)}
                onClick={toggleLike}
                size={enumSized.MIDDLE}>❤ {likes.count} </Text>
            {isOpen && <NotificationWrapper onClosed={() => setOpen(false)}>{notifications}</NotificationWrapper>}
        </>
    );
});