import React, {useEffect, useState} from 'react';
import {PostForm} from "./PostForm";
import {Post} from "./Post";
import {v1} from "uuid";
import DefUserPhoto from '../../../shared/image/def-user-photo.svg'
import s from './NewsFeed.module.css'
import {useAppDispatch} from "../../../shared/utils/useAppDispatch";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store";
import {newsFeedActions} from "./newsFeedSlice";


export const NewsFeed = () => {

    const newsFeed = useSelector((state: AppRootStateType) => state.newsFeed.newsFeed)
    const dispatch = useAppDispatch()

    const [page, setPage] = useState(1);
    const [limit] = useState(3);

//todo fixed error react-dom.development.js:67 Warning: Encountered two children with the same key, `d3b96ac0-f5d4-11ee-90ba-856e38e8047a`
    useEffect(() => {
        const loadPosts = () => {
            let newPosts = newsFeed.slice((page - 1) * limit, page * limit);
            dispatch(newsFeedActions.loadMorePosts({newPosts}));
        }
        loadPosts();
    }, [page]);
    console.log(page, '=========')

    const addNewPost = (text: string) => {
        let now = new Date()

        let day = ('0' + now.getDate()).slice(-2)
        let month = ('0' + (now.getMonth() + 1)).slice(-2)
        let year = now.getFullYear().toString().slice(-2)

        let formattedDate = `${day}.${month}.${year}`

        let newPost = {authorName: 'Ivan', postText: text, postDate: formattedDate, likeCount: '0', id: v1(), isLiked: false}

        dispatch(newsFeedActions.addPost({newPost}))

    }

    const changeLike = (id: string, isChanged: boolean, likeCount: string) => {
        dispatch(newsFeedActions.toggleLike({id, isLiked: isChanged, newLikeCount: likeCount}))
    }

    const scrollToEnd = () => {
        setPage(prevPage => prevPage + 1)
    }

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollToEnd()
        }
    }

    return (
        <div className={s.feedContainer}>
            <h2>Лента новостей</h2>
            <div className={s.feed}>
                {newsFeed.map((post) => {
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