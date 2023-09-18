import React from "react";
import style from "./MainPage.module.scss";

import {profileDataReducer} from "entities/profile-data";

import {ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";
import {errorSelector, isloadingSelector, Profile, profileSelector} from "entities/profile";
import {imageAnimation} from "shared/ui/image/Image";
import {ProfileData} from "entities/profile-data";
import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";

const MainPage = () => {
    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isloadingSelector);
    const error = useAppSelector(errorSelector);

    return (
        <ReducerLoader save={true} storeKey="profileDataReducer" reducer={profileDataReducer}>
            <div className={style.page}>
                <Profile
                    classNameImg={style.avatar}
                    animation={imageAnimation.BROADCAST}
                    profileScheme={{profile, isLoading, error}}
                />
                <ProfileData/>
            </div>
        </ReducerLoader>
    )
};

export default MainPage;