import React from 'react';

import {Route} from "react-router-dom";
import {Dialogs} from "../dialogs/Dialogs";
import {Profile} from "../profile/Profile";
import {NewsFeed} from "../newsFeed/components/NewsFeed";

type PropsType = {

}

export const Content:React.FC<PropsType> = (props) => {
    return (
        <section className={'content'}>
            <Route component={NewsFeed} exact path={'/newsFeed'}/>
            <Route component={Dialogs} exact path={'/dialogs'}/>
            <Route component={Profile} path={'/profile'}/>
        </section>

    );
};
