import React, {ReactNode} from "react";
import {BodyText} from "./body-text/BodyText";
import {BodyImage} from "./body-image/BodyImage";
import {BodyCode} from "./body-code/BodyCode";
import {IBlogBody} from "../../../../model/types/blog-scheme";

export const GetBlockBody = (body: IBlogBody): ReactNode => {
    switch (body.type){
        case "text":
            return <BodyText content={body.content}/>
        case "image":
            return <BodyImage content={body.content}/>
        case "code":
            return <BodyCode content={body.content}/>
    }
}