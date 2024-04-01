import React from 'react';

export type PostPropsType = {
    message: string
    likeCount: string
}

export const Post = (props: PostPropsType) => {
    const {message, likeCount} = props

    return (
        <div>
            <span>{message}  <span>{likeCount}</span></span>
        </div>
    );
};
