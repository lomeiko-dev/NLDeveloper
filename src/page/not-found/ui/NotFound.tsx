import style from './NotFound.module.scss';
import {Text, textStyled} from "shared/ui/text/Text";
import {enumSized} from "shared/ui/types";
import {Button, buttonStyled} from "shared/ui/button/Button";
import {Link} from "shared/ui/link/Link";
import {pathRoute} from "shared/config/route";

import notFoundImg from "shared/assets/img/page-back/404.png";

const NotFound = () => {
    return (
        <div className={style.page}>
            <Text size={enumSized.LARGE} styled={textStyled.ERROR}>Страницы не существует</Text>
            <Link to={pathRoute.main}>
                <Button styled={buttonStyled.OUTLINE} size={enumSized.LARGE}>
                    Обновить
                </Button>
            </Link>
            <div>
                <img className={style.icon} src={notFoundImg} alt="not found"/>
            </div>
        </div>
    );
};

export default NotFound;