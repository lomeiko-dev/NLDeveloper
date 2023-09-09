import {createContext} from "react";
import {theme} from "./type-theme";

interface IThemeContextProps {
    theme: theme,
    setTheme: (theme: theme) => void,
}

export const ThemeContext = createContext<IThemeContextProps>(undefined);