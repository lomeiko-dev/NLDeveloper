import {useContext} from "react";

import {ThemeContext} from "shared/config/theme/theme-context";
import {theme} from "shared/config/theme";
import {THEME_KEY} from "shared/config/localstorage-key";

export const useTheme = () => {
    const context = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = context.theme === theme.LIGHT ? theme.DARK : theme.LIGHT;
        localStorage.setItem(THEME_KEY, newTheme);
        context.setTheme(newTheme);
    }

    return {
        theme: context.theme,
        toggleTheme: toggleTheme,
    }
};