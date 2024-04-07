import React, {useState} from 'react';
import {PostForm} from "./PostForm";
import {Post} from "./Post";
import {v1} from "uuid";
import DefUserPhoto from '../../../shared/image/def-user-photo.svg'
import s from './NewsFeed.module.css'


export const NewsFeed = () => {
    const postsArr = [
        {authorName: 'Ivan', postText: 'KHIUHh sdkfjsi', postDate: "22.10.22", likeCount: '1', id: v1(), isLiked: false},
        {authorName: 'Nadia', postText: '324 234 566', postDate: "12.01.23", likeCount: '25', id: v1(), isLiked: true},
        {authorName: 'Ivan', postText: 'gg OORW', postDate: "2.02.23", likeCount: '53', id: v1(), isLiked: true},
    ]
const [posts, setPosts] = useState(postsArr)

    const addNewPost = (text: string) => {
        let newPost = {authorName: 'Ivan', postText: text, postDate: "22.10.22", likeCount: '5', id: v1(), isLiked: false}
        setPosts(prevPosts => [newPost, ...prevPosts ])
    }

    const changeLike = (id: string, isChanged: boolean, likeCount: string) => {
        setPosts(posts.map(el => el.id === id ? {...el, likeCount: likeCount + 1, isLiked: isChanged } : el))
    }
    
    return (
        <div className={s.feedContainer}>
            <h2>Лента новостей</h2>
            <div className={s.feed}>
                {posts.map((post) => {
                    return <Post
                        key={post.id}
                        postId={post.id}
                        postText={post.postText}
                        postDate={post.postDate}
                        authorName={post.authorName}
                        likesCount={post.likeCount}
                        avatarUrl={DefUserPhoto}
                        isLiked={post.isLiked}
                        changeLike={changeLike}
                    />
                })}
            </div>

            <div className={s.feedForm}>
                <PostForm formHandler={addNewPost}/>
            </div>
        </div>
    );
};