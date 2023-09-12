import {Button, buttonStyled} from "shared/ui/button/Button";
import {useTheme} from "shared/lib/hooks/use-theme/useTheme";

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button tkey={theme === "light" ? "theme_light" : "theme_dark"} onClick={toggleTheme} styled={buttonStyled.FILLED}/>
    )
}