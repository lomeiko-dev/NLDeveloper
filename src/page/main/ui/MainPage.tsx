import React, {useEffect} from "react";
import style from "./MainPage.module.scss";

import {getProfileDataThunk, ProfileData, profileDataReducer} from "entities/profile-data";
import {Panel} from "shared/ui/panel/Panel";
import {ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";

import {errorSelector, isloadingSelector, Profile, profileSelector} from "entities/profile";

import {errorSelector as profileDataErrorSelector,
        isLoadingSelector as profileDataIsLoadingSelector,
        profileDataSelector} from "entities/profile-data";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {avatarStyled} from "entities/profile/ui/profile/Profile";

const MainPage = () => {
    const dispatch = useAppDispatch();

    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);
    const error = useAppSelector(errorSelector);

    const profileData = useAppSelector(profileDataSelector);
    const profileDataIsLoading = useAppSelector(profileDataIsLoadingSelector);
    const profileDataError = useAppSelector(profileDataErrorSelector);

    useEffect(() => {
        if(profileData === undefined)
            dispatch(getProfileDataThunk());
    }, [profileData]);

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
                <ProfileData
                    data={profileData} isLoading={profileDataIsLoading} error={profileDataError}
                />
            </div>
        </ReducerLoader>
    )
};

export default MainPage;