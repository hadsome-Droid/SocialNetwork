import React from 'react';
import {NavLink} from "react-router-dom";
import S from './Dialogs.module.css'
import {v1} from "uuid";
import {Dialog} from "./dialog/Dialog";

type PropsType = {

}

export const Dialogs:React.FC<PropsType> = (props) => {

    const users = [
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Nadia'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Edvard'},
    ]

    const messages = [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'Good By!'},
        {id: v1(), message: 'You crazy!'},
    ]

    return (
        <div className={S.conversations}>
            <div className={S.conversations_items}>
                {
                    users.map(user => {
                        return <Dialog userId={user.id} name={user.name} messages={messages}/>
                    })
                }
            </div>
            <div className={S.messages}>
                { messages.map(message => {
                    return <div className={S.message}>{message.message}</div>
                })}
            </div>
        </div>
    );
};
