import React from "react";
import style from './Deleted.module.scss';

import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {deleteThunk} from "../../services/delete-thunk";

import DeleteIcon from "shared/assets/img/button-icon/delete.svg";

export const Deleted = React.memo(({id}: {id: string}) => {
    const dispatch = useAppDispatch();

    const deleteHandler = () => {
        dispatch(deleteThunk(id));
    }

    return (
        <button onClick={deleteHandler}>
            <DeleteIcon className={style.icon}/>
        </button>
    );
});