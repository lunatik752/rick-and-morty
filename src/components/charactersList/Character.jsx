import React from 'react';
import style from './Character.module.scss'
import {NavLink} from "react-router-dom";


export const Character = ({character}) => {


    return (
        <NavLink to={`/character/1`}>
            <div className={style.container}>
                <img src={character.image}
                     alt={character.name}
                     className={style.characterPhoto}/>
                <div className={style.characterName}>
                    <h3>{character.name}</h3>
                </div>
            </div>
        </NavLink>
    );
}

