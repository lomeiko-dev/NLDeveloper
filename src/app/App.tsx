import './styles/index.scss';
import {Routes} from "./providers/router";
import {Layout} from "widgets/layout";

import {useTheme} from "shared/lib/hooks/use-theme/useTheme";
import {useAdaptation} from "shared/lib/hooks/use-adaptation/useAdaptation";

import classNames from "classnames";
import {useAppDispatch} from "../shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useEffect} from "react";
import {getProfileThunk} from "entities/profile";

export const App = () => {
    const {theme} = useTheme();
    const device = useAdaptation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProfileThunk());
    }, []);

    return (
        <div className={classNames("app", device, theme)}>
            <Layout className="container">
                <Routes/>
            </Layout>
        </div>
    );
};