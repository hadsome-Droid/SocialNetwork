import React, {useState} from 'react';
import {Post, PostPropsType} from "../../content/post/Post";



export const MyPosts = () => {

    const initialMassages: PostPropsType[] = [
        {message: 'Hey Fred', likeCount: '0'},
        {message: 'By coffee', likeCount: '13'}
    ]

    const [myPost, setMyPost] = useState(initialMassages)



    return (
        <div>
            <div>
                <div>
                    {myPost.map(el => {
                        return <Post message={el.message} likeCount={el.likeCount}/>
                    })}

                </div>
            </div>

            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
    );
};
