import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import s from './NewsFeed.module.css'

type Props = {
    formHandler: (text: string) => void
}

type Inputs = {
    postText: string
}

export const PostForm = ({formHandler}:Props) => {

    const {
        handleSubmit,
        register,
        formState:{errors}
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        formHandler(data.postText)
    }

    return (
        <form className={s.postForm} onSubmit={handleSubmit(onSubmit)}>
            <input className={s.formText} type="text" {...register('postText')}/>
            <input className={s.submitButton} type="submit"/>
        </form>
    );
};
