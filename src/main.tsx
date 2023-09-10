import {createRoot} from "react-dom/client";
import {App} from "app/App";

import {AdaptationProvider} from "app/providers/adaptation";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/theme";

import "./shared/config/i18n/i18n";

const root = createRoot(document.getElementById("root"));
root.render(
    <AdaptationProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </AdaptationProvider>
);