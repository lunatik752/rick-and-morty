import React, {useEffect} from 'react';
import style from './CharacterPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCharacter} from "../../state/charactePage-reducer";
import {useParams} from "react-router-dom";

export const CharacterPage = () => {

    console.log('page')

    const {id} = useParams()
    const character = useSelector(state =>  state.characterPage.character)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCharacter(id))
    }, [dispatch, id])


    return (
            <div className={style.container}>
                <img src={character.image}
                     alt={character.name}
                     className={style.characterPhoto}/>
                <div className={style.characterName}>
                    <h3>{character.name}</h3>
                </div>
            </div>
    );
}

