import React from 'react';
import style from './Main.module.scss'
import {Redirect, Route, Switch} from "react-router-dom";
import {CharactersList} from "../charactersList/CharactersList";
import {CharacterPage} from "../characterPage/CharacterPage";


export const Main = () => {
    return (
        <div className={style.container}>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={'/charactersList/'}/>}/>
                <Route path={'/charactersList/'} render={() => <CharactersList/>}/>
                <Route path='/character/:id' render={() => <CharacterPage/>}/>
                <Route path={'*'} render={ ()=> <h1>404</h1> } />
            </Switch>
        </div>
    );
}
