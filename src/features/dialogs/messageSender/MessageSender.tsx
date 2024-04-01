import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export const  MessageSender = () => {

    const [text, setText] = useState('')
    const [message, setMessage] = useState()

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    const addMessage = () => {

    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <div>
            <textarea
                placeholder={'Написать сообщение.'}
                value={text}
                onChange={onChange}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={addMessage}>Отправить</button>
        </div>
    );
};

