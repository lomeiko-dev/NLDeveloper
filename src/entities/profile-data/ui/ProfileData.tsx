import React, {useEffect} from "react";
import style from "./ProfileData.module.scss";

import {useAppSelector} from "shared/lib/hooks/use-app-selector/useAppSelector";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";

import {ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";
import {Text, textStyled} from "shared/ui/text/Text";

import {profileDataReducer} from "../model/slice/profile-data-slice";
import {getProfileDataThunk} from "../model/services/get-profile-data-thunk";
import {profileDataSelector} from "../model/selectors/profile-data/profile-data-selector";
import {errorSelector} from "../model/selectors/error/error-selector";

export const ProfileData = React.memo(() => {
    const dispatch = useAppDispatch();
    const profileData = useAppSelector(profileDataSelector);
    const error = useAppSelector(errorSelector);

    useEffect(() => {
        if(profileData === undefined)
            dispatch(getProfileDataThunk());
    }, []);

    return (
        <ReducerLoader storeKey="profileDataReducer" reducer={profileDataReducer} save={true}>
            <div className={style.data}>
                {profileData !== undefined ? (
                    <>
                        <Text>Возраст: {profileData.age}</Text>

                        <Text>Образование: {profileData.education}</Text>

                        <Text>Позиция: {profileData.position}</Text>

                        <Text className={style.bio_block}>{profileData.biography}</Text>
                    </>
                ) : <Text styled={textStyled.ERROR}>{error}</Text>}
            </div>
        </ReducerLoader>
    )
});