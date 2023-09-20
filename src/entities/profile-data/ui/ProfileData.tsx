import React from "react";
import style from "./ProfileData.module.scss";
import {Text, textStyled} from "shared/ui/text/Text";
import {IProfileData} from "../model/typs/profile-data-scheme";

import loader from "shared/assets/gif/loaders/loader.gif";
import classNames from "classnames";

const TFILE: string = "profile_data";

interface IProfileDataProps{
    className?: string,
    data?: IProfileData,
    isLoading: boolean,
    error?: string,
}

export const ProfileData: React.FC<IProfileDataProps> = React.memo((props) => {
    const {
        className,
        data,
        error,
        isLoading
    } = props;
    let content: React.ReactNode;

    if(error !== undefined)
        content = <Text styled={textStyled.ERROR}>{error}</Text>
    if(isLoading)
        content = <img src={loader} alt="load"/>

    return (
            <div className={classNames(style.data, className)}>
                {data && (
                    <>
                        <div className={style.block}>
                            <Text tfile={TFILE} tkey="age"/>
                            <Text>{data.age}</Text>
                        </div>

                        <div className={style.block}>
                            <Text tfile={TFILE} tkey="education"/>
                            <Text>{data.education}</Text>
                        </div>

                        <div className={style.block}>
                            <Text tfile={TFILE} tkey="position"/>
                            <Text>{data.position}</Text>
                        </div>

                        <Text className={style.bio_block}>{data.biography}</Text>
                    </>
                )}
                {content}
            </div>
    )
});