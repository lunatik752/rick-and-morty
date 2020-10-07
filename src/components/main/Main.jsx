import React from 'react';
import style from './Main.module.scss'
import {Redirect, Route, Switch} from "react-router-dom";
import {CharactersList} from "../charactersList/CharactersList";


export const Main = () => {


    return (
        <div className={style.container}>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/charactersList/'}/>}/>
                <Route exact path={'/charactersList/'} render={() => <CharactersList/>}/>
                <Route
                    path='/character/:characterID'
                    render={() => <div>1</div>}/>
            </Switch>
        </div>
    );
}
