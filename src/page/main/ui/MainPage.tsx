import style from "./MainPage.module.scss";
import {profileDataReducer} from "entities/profile-data";
import {ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader";
import {Profile} from "entities/profile";
import {imageAnimation} from "shared/ui/image/Image";
import {ProfileData} from "entities/profile-data";

const MainPage = () => {
    return (
        <ReducerLoader save={true} storeKey="profileDataReducer" reducer={profileDataReducer}>
            <div className={style.page}>
                <Profile width="275px" height="275px" animation={imageAnimation.BROADCAST}/>
                <ProfileData/>
            </div>
        </ReducerLoader>
    )
}

export default MainPage;