import {createRoot} from "react-dom/client";
import {App} from "app/App";

import {AdaptationProvider} from "app/providers/adaptation";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/theme";
import {StoreProvider} from "app/providers/store";
import {AuthenticateProvider} from "app/providers/authenticate";

import "shared/config/i18n/i18n";

const root = createRoot(document.getElementById("root") || new DocumentFragment);
root.render(
    <AdaptationProvider>
        <BrowserRouter>
            <StoreProvider>
                <AuthenticateProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </AuthenticateProvider>
            </StoreProvider>
        </BrowserRouter>
    </AdaptationProvider>
);