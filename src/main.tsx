import {createRoot} from "react-dom/client";
import {App} from "app/App";

import {AdaptationProvider} from "app/providers/adaptation";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/theme";
import {StoreProvider} from "app/providers/store";
import {RedirectProvider} from "app/providers/redirect";

import "shared/config/i18n/i18n";


import {pathRoute} from "shared/config/route";

const root = createRoot(document.getElementById("root") || new DocumentFragment);
root.render(
        <AdaptationProvider>
            <BrowserRouter>
                <RedirectProvider to={pathRoute.main}>
                    <StoreProvider>
                        <ThemeProvider>
                            <App />
                        </ThemeProvider>
                    </StoreProvider>
                </RedirectProvider>
            </BrowserRouter>
        </AdaptationProvider>
);