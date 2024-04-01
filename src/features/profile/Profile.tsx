import React from 'react';

import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsList} from "./myPosts/MyPostsList";


type PropsType = {

}

export const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={s.profile}>
           <h3>Profile</h3>
            <ProfileInfo/>
            <h4>My Posts</h4>
            <MyPostsList/>
        </div>
    );
};
