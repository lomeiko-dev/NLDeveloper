import React, {memo, useEffect, useState} from "react";
import {storeKey} from "app/providers/store/config/types";
import {Reducer} from "@reduxjs/toolkit";
import {reducerManager} from "app/providers/store";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";

interface IReducerLoader {
    children: React.ReactNode;
    storeKey: storeKey,
    reducer: Reducer,
    save: boolean,

}

export const ReducerLoader: React.FC<IReducerLoader> = (props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(reducerManager.getReducerMap()[props.storeKey] !== props.reducer){
            reducerManager.add(props.storeKey, props.reducer);
            dispatch({type: `@INIT ${props.storeKey}`});
        }

        return () => {
            if(!props.save){
                reducerManager.remove(props.storeKey);
                dispatch({type: `@REMOVE ${props.storeKey}`});
            }
        }
    }, []);

    return (<> {props.children} </>)
};