import style from "./ui.module.scss";

export enum enumSized {
    SMALL = "small",
    MIDDLE = "middle",
    LARGE = "large",
}

export const sized: Record<enumSized, string> = {
    [enumSized.SMALL]: style.small,
    [enumSized.MIDDLE]: style.middle,
    [enumSized.LARGE]: style.large
}

