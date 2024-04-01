import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.user_profile}>
            <div className={s.avatar}>
                {/*<img src="avatar.jpg" alt="User Avatar"/> */}
               My Avatar
            </div>

                <div className={s.user_info}>
                    <p>Имя: Иван</p>
                    <p>Фамилия: Иванов</p>
                    <p>Год рождения: 1990</p>
                    <p>Пол: Мужской</p>
                </div>
        </div>
    );
};
