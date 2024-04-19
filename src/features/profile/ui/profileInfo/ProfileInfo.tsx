import React, {useEffect, useState} from 'react';
import DefPhoto from './../../../../shared/image/def-profile-photo.svg'
import s from './ProfileInfo.module.css'
import {useAppDispatch} from "../../../../shared/utils/useAppDispatch";
import {profileThunks} from "../../model/profileSlice";
import {useSelector} from "react-redux";
import {profileSelector} from "../../../../shared/utils/selectors/profileSelectors";

export const ProfileInfo = () => {

    const profile = useSelector(profileSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(profileThunks.getProfile())
    }, []);

    console.log(profile)
    const[editMode, setEditMode] = useState(false)

    const clickHandler = () => {
        setEditMode(!editMode)
    }

    return (
        <div className={s.user_profile}>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img src={DefPhoto} alt="Аватар"/>
                </div>


                {editMode ? <form className={s.editForm}>
                        <input type="text" className={s.editName} placeholder="Имя"/>
                        <input type="email" className={s.editEmail} placeholder="Email"/>
                        <input type="password" className={s.editPassword} placeholder="Пароль"/>
                        <button type="submit" onClick={clickHandler}>Сохранить</button>
                    </form>
                    : <div className={s.profile_info}>
                        <h2 className={s.username}>Имя пользователя</h2>
                        <p className={s.email}>Email пользователя</p>
                        <p className={s.regdate}>Дата регистрации</p>
                        <button className={s.editProfile} onClick={clickHandler}>Редактировать профиль</button>
                    </div>}
            </div>



            {/*<div className={s.posts}>*/}
            {/*    В этом месте будут отображаться посты*/}
            {/*</div>*/}
        </div>





        // <div className={s.user_profile}>
        //     <div className={s.avatar}>
        //         {/*<img src="avatar.jpg" alt="User Avatar"/> */}
        //        My Avatar
        //     </div>
        //
        //         <div className={s.user_info}>
        //             <p>Имя: Иван</p>
        //             <p>Фамилия: Иванов</p>
        //             <p>Год рождения: 1990</p>
        //             <p>Пол: Мужской</p>
        //         </div>
        // </div>
    );
};


// <div id="profile">
//     <h1>Профиль</h1>
//     <img id="avatar" src="avatar.jpg" alt="Аватар">
//         <h2 id="username">Имя пользователя</h2>
//         <p id="email">Email пользователя</p>
//         <p id="regdate">Дата регистрации</p>
//         <button id="editProfile">Редактировать профиль</button>
//
//         <form id="editForm" style="display: none;">
//             <input type="text" id="editName" placeholder="Имя">
//                 <input type="email" id="editEmail" placeholder="Email">
//                     <input type="password" id="editPassword" placeholder="Пароль">
//                         <button type="submit">Сохранить</button>
//         </form>
//
//         <div id="posts">
//             <!-- В этом месте будут отображаться посты -->
//         </div>
// </div>