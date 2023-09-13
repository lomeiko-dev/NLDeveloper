import React from "react";
import style from "./MainPage.module.scss";
import {profileDataReducer} from "entities/profile-data";
import {ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";
import {Profile} from "entities/profile";
import {imageAnimation} from "shared/ui/image/Image";
import {ProfileData} from "entities/profile-data";

const MainPage =  React.memo(() => {
    return (
        <ReducerLoader save={true} storeKey="profileDataReducer" reducer={profileDataReducer}>
            <div className={style.page}>
                <Profile
                    classNameImg={style.avatar}
                    classNameImgWrapper={style.profile}
                    animation={imageAnimation.BROADCAST}/>
                <ProfileData/>
            </div>
        </ReducerLoader>
    )
});

export default MainPage;