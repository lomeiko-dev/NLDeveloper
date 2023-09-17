import React, {useEffect, useState} from "react";
import style from "./Layout.module.scss";

import {SideBar} from "./components/sidebar/SideBar";
import {useAdaptation} from "shared/lib/hooks/use-adaptation/useAdaptation";

interface ILayoutProps {
    children: React.ReactNode,
    className?: string,
}
export const Layout: React.FC<ILayoutProps> =  (props) => {
    const device = useAdaptation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(device !== "mobile");
    }, [device]);

    const toggle = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div className={style.layout}>
            <SideBar isOpen={isOpen} toggle={toggle} visibleToggle={device === "mobile"}/>
            <div className={props.className}>
                {props.children}
            </div>
        </div>
    );
};