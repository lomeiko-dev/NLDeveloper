import React, {ChangeEvent, useEffect, useState} from "react";
import style from './FormComment.module.scss';

import {Button, buttonStyled} from "shared/ui/button/Button";
import {Field} from "shared/ui/field/Field";
import {Panel} from "shared/ui/panel/Panel";

import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useAuth} from "entities/auth";

import {addCommentThunk} from "../../services/add-comment-thunk";
import {changeCommentThunk} from "../../services/change-comment-thunk";

import {IComment} from "entities/comments";

interface IFormAddCommentProps {
    id_product: string,
    defaultName?: string,
    defaultBody?: string,
    idChanged?: string
}

export const FormComment: React.FC<IFormAddCommentProps> = React.memo((props) => {
    const {
        id_product,
        defaultBody = "",
        defaultName = "",
        idChanged
    } = props;

    const dispatch = useAppDispatch();
    const {authData} = useAuth();

    const [name, setName] = useState("");
    const [body, setBody] = useState("");

    const clearState = () => {
        setName(defaultName);
        setBody(defaultBody);
    }

    useEffect(() => {
        clearState();
    }, [defaultName, defaultBody]);

    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const changeBodyHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }
    const sendHandler = () => {
        const comment: IComment = {
            id: "",
            id_user: authData?.id || "-1",
            id_product: id_product,
            body: body,
            name: name,
        }

        if(idChanged === undefined)
            dispatch(addCommentThunk(comment));
        else
            dispatch(changeCommentThunk({id: idChanged, data: comment}));
        clearState();
    }

    return (
        <Panel className={style.form}>
            <Field onChange={changeNameHandler} type="text" value={name} placeholder="Имя"/>
            <Field multiline={true} onChange={changeBodyHandler} value={body} placeholder="Комментарий"/>
            <Button onClick={sendHandler} styled={buttonStyled.FILLED}>{idChanged === undefined ? "send" : "changed"}</Button>
        </Panel>
    );
});