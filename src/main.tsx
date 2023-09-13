import {createRoot} from "react-dom/client";
import {App} from "app/App";

import {AdaptationProvider} from "app/providers/adaptation";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/theme";

import "shared/config/i18n/i18n";
import {StoreProvider} from "app/providers/store";
import {use} from "i18next";

const root = createRoot(document.getElementById("root") || new DocumentFragment);
root.render(
    <AdaptationProvider>
        <BrowserRouter>
            <StoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StoreProvider>
        </BrowserRouter>
    </AdaptationProvider>
);