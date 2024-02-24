import React from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import s from './Profile.module.css'

type PropsType = {

}

export const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={s.profile}>
           <h3>Profile</h3>
            <ProfileInfo/>
            <h4>My Posts</h4>
            <MyPosts/>
        </div>
    );
};
