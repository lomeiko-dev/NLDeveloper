import React, {useEffect} from "react";
import style from "./MainPage.module.scss";

import {Profile} from "entities/profile";
import {getProfileDataThunk, ProfileData, profileDataReducer} from "entities/profile-data";
import {Panel} from "shared/ui/panel/Panel";
import {avatarStyled} from "entities/profile/ui/profile/Profile";

import {errorSelector, isloadingSelector, profileSelector} from "entities/profile";
import {errorSelector as profileDataErrorSelector,
        isLoadingSelector as profileDataIsLoadingSelector,
        profileDataSelector} from "entities/profile-data";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";

const MainPage = () => {
    const dispatch = useAppDispatch();

    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);
    const error = useAppSelector(errorSelector);

    const profileData = useAppSelector(profileDataSelector);
    const profileDataIsLoading = useAppSelector(profileDataIsLoadingSelector);
    const profileDataError = useAppSelector(profileDataErrorSelector);

    useEffect(() => {
        dispatch(getProfileDataThunk());
    }, []);

    return (
        <ReducerLoader storeKey="profileDataReducer" reducer={profileDataReducer} save={false}>
            <div className={style.page}>
                <Panel className={style.profile_wrapper}>
                    <Profile
                        styled={avatarStyled.ANIMATIONOUTLINE}
                        classNameImg={style.avatar}
                        data={profile} isLoading={isLoading} error={error}
                    />
                </Panel>
                <ProfileData
                    data={profileData}
                    isLoading={profileDataIsLoading} error={profileDataError}
                />
            </div>
        </ReducerLoader>
    )
};

export default MainPage;