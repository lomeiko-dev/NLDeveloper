import React, {useState} from "react";
import {ThemeContext} from "shared/config/theme/theme-context";
import {theme as enumTheme} from "shared/config/theme";
import {THEME_KEY} from "shared/config/localstorage-key";

interface IThemeProvider {
    children: React.ReactNode,
}

const defaultValue = localStorage.getItem(THEME_KEY) || enumTheme.LIGHT;

export const ThemeProvider: React.FC<IThemeProvider> = (props) => {
    const [theme, setTheme] = useState<enumTheme>(defaultValue as enumTheme);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};