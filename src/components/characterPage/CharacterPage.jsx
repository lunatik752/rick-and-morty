import React, {useEffect} from 'react';
import style from './CharacterPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getCharacter} from "../../state/charactePage-reducer";
import {useParams} from "react-router-dom";

export const CharacterPage = () => {

    console.log('page')

    const {id} = useParams()
    const character = useSelector(state => state.characterPage.character)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCharacter(id))
    }, [dispatch, id])

    const characterStatus = character.status;
    let statusClassName = '';
    switch (characterStatus) {
        case 'Alive':
            statusClassName = style.characterStatusAlive;
            break;
        case 'Dead':
            statusClassName = style.characterStatusDead;
            break;
        default:

    }


    return (
        <div className={style.container}>
            <div className={style.characterPhoto}>
                <img src={character.image}
                     alt={character.name}/>
            </div>

            <div className={style.characterDescription}>
                <div className={style.characterName}>
                    <h3>{character.name}</h3>
                </div>
                <div className={style.characterStatus}>
                    <span><span className={statusClassName}>{characterStatus}</span> - {character.gender} </span>
                </div>
                <div className={style.description}>
                    <span className={style.sectionTitle}> Last known location:</span>
                    <span className={style.descriptionName}> Last known location:</span>
                </div>
                <div className={style.description}>
                    <span className={style.sectionTitle}> First seen in::</span>
                    <span className={style.descriptionName}> Last known location:</span>
                </div>
            </div>

        </div>
    );
}

