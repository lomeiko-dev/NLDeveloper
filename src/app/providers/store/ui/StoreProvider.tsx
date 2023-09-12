import {Provider} from "react-redux";
import {store} from "../config/store";
import React from "react";

interface IStoreProvider {
    children: React.ReactNode;
}

export const StoreProvider: React.FC<IStoreProvider> = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};