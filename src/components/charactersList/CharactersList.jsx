import React from 'react';
import style from './CharactersList.module.scss'
import {Character} from "./Character";
import {useSelector} from "react-redux";

export const CharactersList = () => {

const charactersList = useSelector(state =>  state.charactersList.characters)

debugger

    return (
        <div className={style.container}>
            {
                charactersList.map( ch => <Character key={ch.id} character={ch}/>)
            }

        </div>
    );
}
