import React from 'react';
import style from "./SetChanged.module.scss";

import {setIdChanged} from "entities/comments";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";

import ChangeIcon from "shared/assets/img/button-icon/change.svg";

export const SetChanged = React.memo(({id}: {id: string}) => {
    const dispatch = useAppDispatch();
    const setChangedHandler = () => {
        dispatch(setIdChanged(id));
    }

    return (
        <button onClick={setChangedHandler}>
            <ChangeIcon className={style.icon}/>
        </button>
    );
});