import React from 'react';
import s from   './NewsFeed.module.css'
import Like from '../../../shared/image/black_heart.svg'
import isLike from '../../../shared/image/red_heart.svg'


type Props = {
    postId: string
    avatarUrl?: string
    authorName: string
    postText: string
    postDate: string
    likesCount: string
    isLiked: boolean
    changeLike: (id: string, isChanged: boolean, likeCount: string) => void
}

// todo likeCount
export const Post = ({authorName, postDate, postText, likesCount, avatarUrl, isLiked, changeLike, postId}: Props) => {
 const   clickHandler = () => {
     let isChanged = !isLiked
     changeLike(postId, isChanged, likesCount)
 }


    return (
        <div className={s.post}>
            <div className={s.postAuthor}>
                <img className={s.authorAvatar} src={avatarUrl} alt="Аватар автора" />
                <h2 className={s.authorName}>{authorName}</h2>
            </div>
            <p className={s.postText}>{postText}</p>
            <div className={s.postDetails}>
                <span className={s.postDate}>{postDate}</span>
                <button className={s.likeBtn} onClick={clickHandler}>
                    <img src={isLiked ? isLike : Like} alt="Like Button"/>  {likesCount}
                </button>
                {/*<span className={s.postLikes}>Количество лайков: {likesCount}</span>*/}
            </div>
        </div>
    );
};
