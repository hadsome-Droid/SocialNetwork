import React from 'react';
import S from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    userId: string
    name: string
    messages: MessagePropsType[]
}

type MessagePropsType = {
    id: string
    message: string
}

export const Dialog = (props:DialogPropsType) => {
    const {userId, name, messages} = props
    return (
        <div className={S.conversation}>
            <NavLink to={`/dialogs/${userId}`}>{name}</NavLink>
        </div>
    );
};
