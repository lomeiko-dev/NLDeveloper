import {Button, buttonStyled} from "shared/ui/button/Button";
import {useTheme} from "shared/lib/hooks/use-theme/useTheme";

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button onClick={toggleTheme} styled={buttonStyled.FILLED}>тема: {theme}</Button>
    )
}