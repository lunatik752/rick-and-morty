import React from 'react';
import style from './Character.module.scss'
import {NavLink} from "react-router-dom";


export const Character = ({character}) => {


    return (
        <div className={style.wrapper}>
        <NavLink to={`/character/${character.id}`}>
            <div className={style.container}>
                <div className={style.characterPhoto}>
                    <img src={character.image} alt={character.name}/>
                </div>
                <div className={style.characterName}>
                    <h3>{character.name}</h3>
                </div>
            </div>
        </NavLink>
        </div>
    );
}

