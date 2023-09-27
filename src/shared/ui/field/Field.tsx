import style from './Field.module.scss';
import React, {HTMLAttributes} from "react";
import classNames from "classnames";

interface IFieldProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    className?: string,
    type?: "text" | "number" | "email" | "checkbox",
    multiline?: boolean,
    value: string,
}

export const Field: React.FC<IFieldProps> = (props) => {
    const {
        className,
        type,
        value,
        multiline = false,
        ...otherComponents
    } = props

    return (
        <>
            {multiline ?
                <textarea value={value} className={classNames(style.input, style.textarea, className)} {...otherComponents}/> :
                <input value={value} type={type} className={classNames(style.input, className)} {...otherComponents}/>}
        </>
    );
};