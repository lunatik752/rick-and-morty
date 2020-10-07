import React from 'react';
import style from './Main.module.scss'
import {Redirect, Route, Switch} from "react-router-dom";


export const Main = () => {


    return (
        <div className={style.container}>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/charactersList/'}/>}/>
                <Route
                    path='/character/:characterID'
                    render={() => <div>1</div>}/>
            </Switch>
        </div>
    );
}
