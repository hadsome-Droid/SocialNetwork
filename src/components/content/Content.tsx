import React from 'react';
import {Profile} from "../profile/Profile";
import {Dialogs} from "../dialogs/Dialogs";
import {Route} from "react-router-dom";

type PropsType = {

}

export const Content:React.FC<PropsType> = (props) => {
    return (
        <section className={'content'}>
            <Route component={Dialogs} path={'/dialogs'}/>
            <Route component={Profile} path={'/profile'}/>
        </section>

    );
};
