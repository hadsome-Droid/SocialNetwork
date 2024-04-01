import React, {useState} from 'react';
import {Post, PostPropsType} from "../../content/post/Post";
import {Button} from "../../../shared/components/Button/Button";





export const MyPostsList = () => {

    const initialMassages: PostPropsType[] = [
        {message: 'Hey Fred', likeCount: '0'},
        {message: 'By coffee', likeCount: '13'}
    ]

    const [myPost, setMyPost] = useState(initialMassages)



    return (
        <div>
            <div>
                <textarea></textarea>
                <Button title={'Add Post'} callBack={() => {}}/>
            </div>
            <div>
                <div>
                    {myPost.map(el => {
                        return <Post message={el.message} likeCount={el.likeCount}/>
                    })}

                </div>
            </div>


        </div>
    );
};
