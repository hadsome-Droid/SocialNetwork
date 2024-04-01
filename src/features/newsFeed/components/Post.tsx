import React from 'react';
import s from   './NewsFeed.module.css'

type Props = {
    avatarUrl: string
    authorName: string
    postText: string
    postDate: string
    likesCount: number
}

// todo
export const Post = ({authorName, postDate, postText, likesCount, avatarUrl}: Props) => {
    return (
        <div className="post">
            <div className="post-author">
                <img className="author-avatar" src={avatarUrl} alt="Аватар автора" />
                <h2 className="author-name">{authorName}</h2>
            </div>
            <p className="post-text">{postText}</p>
            <div className="post-details">
                <span className="post-date">{postDate}</span>
                <span className="post-likes">Количество лайков: {likesCount}</span>
            </div>
        </div>
    );
};
