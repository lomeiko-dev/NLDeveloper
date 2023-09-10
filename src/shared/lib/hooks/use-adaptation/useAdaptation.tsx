import {useContext} from "react";
import {AdaptationContext} from "shared/config/adaptation";

export const useAdaptation = () => {
    return  useContext(AdaptationContext);
};