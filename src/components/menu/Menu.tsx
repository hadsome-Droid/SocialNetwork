import React from 'react';

type PropsType = {
    itemMenu: string[]
}

export const Menu: React.FC<PropsType> = (props) => {
    const {itemMenu} = props
    return (
        <nav>
            <ul>{
                itemMenu.map(el => {
                    return (
                        <li><a href="">{el}</a></li>
                    )
                })
            }

            </ul>
        </nav>
    );
};
