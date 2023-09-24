import React, {useEffect, useState} from "react";
import style from "./Like.module.scss";

import {Text} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import {getCountLikeThunk} from "../module/services/get-count-like-thunk";
import {getIsLikeThunk} from "../module/services/get-is-like-thunk";
import {toggleLikeThunk} from "../module/services/toggle-like-thunk";

import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";

import classNames from "classnames";
import {unwrapResult} from "@reduxjs/toolkit";

import {ILikeProps} from "../module/types/like-thunk-props";

export const Like: React.FC<ILikeProps> = React.memo(({id_user, id_product}) => {
    const dispatch = useAppDispatch();
    const [likes, setLikes] = useState(0);
    const [isMyLicked, setIsMyLicked] = useState(false);

    useEffect(() => {
        // upload count likes
        dispatch(getCountLikeThunk(id_product))
            .then(unwrapResult)
            .then(res => setLikes(res));
        // upload is like author
        dispatch(getIsLikeThunk({id_user: id_user, id_product: id_product}))
            .then(unwrapResult)
            .then(res => setIsMyLicked(res));
    }, []);

    const toggleLike = () => {
        dispatch(toggleLikeThunk({id_user: id_user, id_product:id_product}))
            .then(unwrapResult)
            .then(res => {
                setLikes(prevState => res ? prevState+1 : prevState-1);
                setIsMyLicked(res);
            });
    }

    const mods = { [style.active]: isMyLicked }
    return (
        <Text
            className={classNames(style.click, mods)}
            onClick={likes !== -1 ? toggleLike : () => null}
            size={enumSized.MIDDLE}>❤ {likes === -1 ? "--" : likes}</Text>
    );
});