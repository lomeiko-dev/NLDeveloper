import React, {ReactNode} from "react";
import {IBlogBody} from "../../../../model/types/blog-scheme";
import {BodyText} from "../../body-components/body-text/BodyText";
import {BodyImage} from "../../body-components/body-image/BodyImage";

export const GetBlockBody = (body: IBlogBody): ReactNode => {
    switch (body.type){
        case "text":
            return <BodyText content={body.content}/>
        case "image":
            return <BodyImage content={body.content}/>
        case "code":
            return null;
    }
}