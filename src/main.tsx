import {createRoot} from "react-dom/client";
import {App} from "app/App";

import {AdaptationProvider} from "app/providers/adaptation";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/theme";
import {StoreProvider} from "app/providers/store";
import {AuthenticateProvider} from "app/providers/authenticate";
import {NotificationProvider} from "./app/providers/notification/ui/NotificationProvider";

import "shared/config/i18n/i18n";

const root = createRoot(document.getElementById("root") || new DocumentFragment);
root.render(
    <BrowserRouter>
        <AdaptationProvider>
            <ThemeProvider>
                <StoreProvider>
                    <NotificationProvider>
                        <AuthenticateProvider>
                            <App />
                        </AuthenticateProvider>
                    </NotificationProvider>
                </StoreProvider>
            </ThemeProvider>
        </AdaptationProvider>
    </BrowserRouter>
);