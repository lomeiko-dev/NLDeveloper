import React, {useEffect, useState} from "react";
import {AdaptationContext, typeAdaptationContext} from "shared/config/adaptation";
import {MIN_WIDTH_APP} from "shared/assets/consts/vars";

interface IAdaptationProvider {
    children: React.ReactNode,
}
export const AdaptationProvider: React.FC<IAdaptationProvider> = (props) => {
    const [device, setDevice] = useState<typeAdaptationContext>("desktop");

    const resizeWindowHandle = () => {
        if(window.innerWidth <= MIN_WIDTH_APP)
            setDevice("mobile");
        else
            setDevice("desktop");
    }

    useEffect(() => {
        resizeWindowHandle();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", resizeWindowHandle);

        return () => {
            window.removeEventListener("resize", resizeWindowHandle);
        }
    }, []);

    return (
        <AdaptationContext.Provider value={device}>
            {props.children}
        </AdaptationContext.Provider>
    );
};