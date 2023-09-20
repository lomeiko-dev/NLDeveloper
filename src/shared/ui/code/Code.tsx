import React, {ReactNode, useEffect, useState} from "react";
import style from './Code.module.scss';
import {Panel} from "shared/ui/panel/Panel";
import classNames from "classnames";

interface ICodeProps {
    className?: string,
    classNameHeader?: string,
    children?: ReactNode,
    syntax: string,
}

export const Code: React.FC<ICodeProps> = ({syntax, className, classNameHeader, children}) => {
    const [countString, setCountString] = useState<number[]>([]);

    useEffect(() => {
        const countString = syntax.match(/\n/g)?.map((_, index) => index) || [];
        countString.push(countString.length);
        setCountString(countString);
    }, [syntax]);

    return (
        <div className={classNames(style.code, className)}>
            <Panel className={classNames(style.header, classNameHeader)}>
                <div className={style.header_icon}>
                    <div style={{background: "red"}}></div>
                    <div style={{background: "yellow"}}></div>
                    <div style={{background: "green"}}></div>
                </div>
                {children}
            </Panel>
            <Panel className={style.body}>
                <div className={style.numbering}>
                    {countString.map(item => <div>{item}</div>)}
                </div>
                <pre>
                    <code>{syntax}</code>
                </pre>
            </Panel>
        </div>

    );
};