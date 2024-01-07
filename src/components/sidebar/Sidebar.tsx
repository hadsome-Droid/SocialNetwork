import React from 'react';
import {Menu} from "../menu/Menu";

export const Sidebar = () => {
    const navItem = ['News', 'Profile', 'Music', 'Friends', 'Settings']
    return (
        <Menu itemMenu={navItem}/>
    );
};
