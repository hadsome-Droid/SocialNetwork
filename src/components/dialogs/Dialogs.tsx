import React from 'react';
import {NavLink} from "react-router-dom";
import S from './Dialogs.module.css'
import {v1} from "uuid";

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
                        return <div className={S.conversation}>
                        <NavLink to={`/dialogs/${user.id}`}>{user.name}</NavLink>
                            </div>
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
