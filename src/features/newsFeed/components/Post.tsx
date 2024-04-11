import React, {useState} from 'react';
import s from './NewsFeed.module.css'
import Like from '../../../shared/image/black_heart.svg'
import isLike from '../../../shared/image/red_heart.svg'
import {EditableSpan} from "../../../shared/components/editableSpan/EditableSpan";


type Props = {
    postId: string
    avatarUrl?: string
    authorName: string
    postText: string
    postDate: string
    likesCount: string
    isLiked: boolean
    changeLike: (id: string, isChanged: boolean, likeCount: string) => void
    changePostMessage: (id: string, text: string) => void
}

export const Post = ({authorName, postDate, postText, likesCount, avatarUrl, isLiked, changeLike, postId, changePostMessage}: Props) => {



    const clickHandler = () => {
        let isChanged = !isLiked
        let setLikeCont = isChanged ? +likesCount + 1 : +likesCount - 1
        changeLike(postId, isChanged, String(setLikeCont))
    }

    const onChange = (text: string) => {
        changePostMessage(postId,text)
    }

    return (
        <div className={s.post}>
            <div className={s.postAuthor}>
                <img className={s.authorAvatar} src={avatarUrl} alt="Аватар автора"/>
                <h2 className={s.authorName}>{authorName}</h2>
            </div>
            <EditableSpan text={postText} callBack={onChange}/>
            {/*{ edit*/}
            {/*    ? <input type="text" onBlur={() => setEdit(false)}/>*/}
            {/*    : <span className={s.postText}  onDoubleClick={() => setEdit(true)}>{postText}</span>*/}
            {/*}*/}
            <div className={s.postDetails}>
                <span className={s.postDate}>{postDate}</span>
                <button className={s.likeBtn} onClick={clickHandler}>
                    <img src={isLiked ? isLike : Like} alt="Like Button"/> {likesCount}
                </button>
            </div>
        </div>
    );
};
