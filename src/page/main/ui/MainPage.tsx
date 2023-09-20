import React from "react";
import style from "./MainPage.module.scss";

import {ProfileData, profileDataReducer} from "entities/profile-data";
import {Panel} from "shared/ui/panel/Panel";
import {ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";

import {errorSelector, isloadingSelector, Profile, profileSelector} from "entities/profile";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {avatarStyled} from "entities/profile/ui/profile/Profile";

const MainPage = () => {
    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);
    const error = useAppSelector(errorSelector);

    return (
        <ReducerLoader save={true} storeKey="profileDataReducer" reducer={profileDataReducer}>
            <div className={style.page}>
                <Panel className={style.profile_wrapper}>
                    <Profile
                        styled={avatarStyled.ANIMATIONOUTLINE}
                        classNameImg={style.avatar}
                        data={profile} isLoading={isLoading} error={error}
                    />
                </Panel>
                <ProfileData/>
            </div>
        </ReducerLoader>
    )
};

export default MainPage;