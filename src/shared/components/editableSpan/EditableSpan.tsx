import React, {ChangeEvent, useState} from 'react';
import s from "../../../features/newsFeed/components/NewsFeed.module.css";

type Props = {
    text: string
    callBack: (newText: string) => void
}

export const EditableSpan = ({text, callBack}:Props) => {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(text)

    const activeEditMode = () => {
        setEditMode(true)
        setValue(text)
    }

    const activeViewMode = () => {
        setEditMode(false)
        callBack(value)
    }

    const changeText = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            activeViewMode();
        }
    }

    return editMode
            ? (<input type="text" value={value} onChange={changeText} onBlur={activeViewMode} onKeyPress={handleKeyPress}/>)
            : (<span className={s.postText}  onDoubleClick={activeEditMode}>{text}</span>);
};
