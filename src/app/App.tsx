import './styles/index.scss';
import {Routes} from "./providers/router";
import {Layout} from "widgets/layout";

import {useTheme} from "shared/lib/hooks/use-theme/useTheme";
import {useAdaptation} from "shared/lib/hooks/use-adaptation/useAdaptation";

import classNames from "classnames";

export const App = () => {
    const {theme} = useTheme();
    const device = useAdaptation();
    
    return (
        <div className={classNames("app", device, theme)}>
            <Layout className="container">
                <Routes/>
            </Layout>
        </div>
    );
};