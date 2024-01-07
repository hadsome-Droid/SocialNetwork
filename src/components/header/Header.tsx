import React from 'react';
import {Menu} from "../menu/Menu";

export const Header: React.FC = () => {
    const navItem = ['News', 'Profile', 'Music', 'Friends', 'Settings']

    return (
        <header>
            <div>
                Logo
            </div>
            <Menu itemMenu={navItem}/>
        </header>
    );
};

