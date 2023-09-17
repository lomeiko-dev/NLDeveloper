import React from "react";
import style from "./Header.module.scss";

import {Panel, panelGrid} from "shared/ui/panel/Panel";
import {errorSelector, isloadingSelector, Profile, profileSelector} from "entities/profile";
import {imageStyled} from "shared/ui/image/Image";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

export const Header = React.memo(() => {
    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);
    const error = useAppSelector(errorSelector);

    return (
        <Panel grid={panelGrid.COLUMN} className={style.header}>

            <Profile
                className={style.profile} classNameImg={style.avatar}
                styled={imageStyled.FRAMING}
                profileScheme={{profile, isLoading, error}}
            />

        </Panel>
    )
});