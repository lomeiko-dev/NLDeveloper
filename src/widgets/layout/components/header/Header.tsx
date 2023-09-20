import React from "react";
import style from "./Header.module.scss";

import {Panel, panelGrid} from "shared/ui/panel/Panel";
import {errorSelector, isloadingSelector, Profile, profileSelector} from "entities/profile";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {avatarStyled} from "entities/profile/ui/profile/Profile";

export const Header = React.memo(() => {
    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);
    const error = useAppSelector(errorSelector);

    return (
        <Panel grid={panelGrid.COLUMN} className={style.header}>
            <Profile
                styled={avatarStyled.STATICOUTLINE}
                className={style.profile} classNameImg={style.avatar}
                data={profile} isLoading={isLoading} error={error}
            />
        </Panel>
    )
});