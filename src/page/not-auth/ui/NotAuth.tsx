import style from './NotAuth.module.scss';
import {Text, textStyled} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";

import notAuthImg from "shared/assets/img/page-back/401.png";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {authSelector} from "entities/auth";
import {Navigate} from "react-router-dom";
import {pathRoute} from "shared/config/route";

const NotAuth = () => {
    const authData = useAppSelector(authSelector);

    if(authData !== undefined)
        return <Navigate to={pathRoute.main}/>

    return (
        <div className={style.page}>
            <Text styled={textStyled.ERROR} size={enumSized.LARGE}>По непредвиденной ошибки вам не удалось авторизоваться/зарегестрироваться на сайте. Доступ к сайту не доступен!</Text>
            <Text size={enumSized.SMALL}>Нажмите клавишу F5 что-бы обновить сайт</Text>
            <div>
                <img className={style.icon} src={notAuthImg} alt="not auth"/>
            </div>
        </div>
    );
};

export default NotAuth;