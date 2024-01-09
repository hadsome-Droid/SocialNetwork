import React from 'react';
import {NavLink} from "react-router-dom";

type ItemType = {
    id: string
    name: string
    path: string
}

type PropsType = {
    itemsMenu: ItemType[]
}

export const Menu: React.FC<PropsType> = (props) => {
    const {itemsMenu} = props
    return (
        <nav>
            <ul>{
                itemsMenu.map(el => {
                    return (
                        <li key={el.id}><NavLink to={el.path} activeClassName={'active'}>{el.name}</NavLink></li>
                    )
                })
            }

            </ul>
        </nav>
    );
};
