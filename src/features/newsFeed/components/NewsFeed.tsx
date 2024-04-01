import React from 'react';
import {PostForm} from "./PostForm";
import {Post} from "./Post";

export const NewsFeed = () => {
    const posts = [
        {name: 'Ivan', text: 'KHIUHh sdkfjsi', data: "22.10.22", likeCount: '5'},
        {name: 'Nadia', text: '324 234 566', data: "12.01.23", likeCount: '5'},
        {name: 'Ivan', text: 'gg OORW', data: "2.02.23", likeCount: '5'},
    ]


    return (
        <div>
            <h2>Лента новостей</h2>
            <Post/>
            <PostForm/>
        </div>
    );
};