import './styles/index.scss';
import {Routes} from "./providers/router";
import {Layout} from "widgets/layout";
import {useTheme} from "shared/lib/hooks/use-theme/useTheme";
import classNames from "classnames";

export const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames("app", theme)}>
            <Layout className="container">
                <Routes/>
            </Layout>
        </div>
    );
};