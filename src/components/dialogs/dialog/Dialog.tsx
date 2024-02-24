import React from 'react';


type DialogPropsType = {
    id: string
    name: string
    messages: MessagePropsType[]
}

type MessagePropsType = {
    id: string
    message: string
}

export const Dialog = (props:DialogPropsType) => {
    const {id, name, messages} = props
    return (
        <div>
            {id}
        </div>
    );
};
