import {Button, buttonStyled} from "shared/ui/button/Button";
import {useTranslation} from "react-i18next";

export const TranslatorSwitcher = () => {
    const { i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button tkey={i18n.language === "ru" ? "language_ru" : "language_en"} onClick={toggleLanguage} styled={buttonStyled.FILLED}/>
    );
};