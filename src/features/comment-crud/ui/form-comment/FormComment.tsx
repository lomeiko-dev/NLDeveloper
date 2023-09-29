import React, {ChangeEvent, useEffect, useState} from "react";
import style from './FormComment.module.scss';

import {Button, buttonStyled} from "shared/ui/button/Button";
import {Field} from "shared/ui/field/Field";
import {Panel} from "shared/ui/panel/Panel";
import {Text, textStyled} from "shared/ui/text/Text";

import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/useAppDispatch";
import {useAuth} from "entities/auth";

import {addCommentThunk} from "../../services/add-comment-thunk";
import {changeCommentThunk} from "../../services/change-comment-thunk";

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

    const [isLoading, setLoading] = useState(false);
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
        setLoading(true);
        if(idChanged === undefined)
            dispatch(addCommentThunk({id_product, name, body, id_user: authData?.id || "-1"}))
                .finally(() => setLoading(false));
        else
            dispatch(changeCommentThunk({id: idChanged, id_product, name, body, id_user: authData?.id || "-1"}))
                .finally(() => setLoading(false));
        clearState();
    }

    return (
        <Panel className={style.form}>
            {!authData?.isBlocked ? <>
                <Field onChange={changeNameHandler} type="text" value={name} placeholder="Имя"/>
                <Field multiline={true} onChange={changeBodyHandler} value={body} placeholder="Комментарий"/>
                <Button disabled={isLoading} onClick={sendHandler} styled={buttonStyled.FILLED}>{idChanged === undefined ? "send" : "changed"}</Button></>
            :
                <Text styled={textStyled.ERROR}>Вы заблокированны по причине: {authData?.reason}</Text>}
        </Panel>
    );
});