import React from 'react';
import {Menu} from "../menu/Menu";
import {v1} from "uuid";

export const Sidebar = () => {
    const navItem = [
        {id: v1(), name: 'News', path: '/news'},
        {id: v1(), name: 'Profile', path: '/profile'},
        {id: v1(), name: 'Dialogs', path: '/dialogs'},
        {id: v1(), name: 'Friends', path: '/friends'},
        {id: v1(), name: 'Settings', path: '/settings'}
    ]
    return (
        <section className={'sidebar'}>
            <Menu itemsMenu={navItem}/>

        </section>
    );
};
