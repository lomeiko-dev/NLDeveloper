import style from "./Panel.module.scss";
import React from "react";
import classNames from "classnames";

export enum panelColor {
    SECONDARY = "secondary",
    TERNARY = "ternary",
}

export enum panelStyled {
    SHADOW = "shadow",
}

export enum panelGrid {
    COLUMN = "column",
    LINE = "line",
}

export interface IPanelProps {
    children: React.ReactNode,
    className?: string,
    styled?: panelStyled,
    grid?: panelGrid,
    background?: panelColor,
}

export const Panel: React.FC<IPanelProps> = React.memo((props) => {
    const {
        children,
        className,
        grid = panelGrid.LINE,
        styled,
        background = panelColor.SECONDARY,
    } = props;

    return (
        <div className={classNames(style.panel, className, style[background], style[grid], style[styled])}>
            {children}
        </div>
    )
});