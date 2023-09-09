import './styles/index.scss';
import {Routes} from "./providers/router";
import {Layout} from "widgets/layout";

export const App = () => {
    return (
        <Layout className="container">
            <Routes/>
        </Layout>
    );
};