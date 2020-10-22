import React, {useEffect} from 'react';
import style from './CharacterPage.module.scss'
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useActions} from "../../state/store";
import {characterPageActions, characterPageSelectors} from "./";


export const CharacterPage = React.memo(() => {

        const {id} = useParams()
        const character = useSelector(characterPageSelectors.selectCharacter)
        const firstEpisodeTitle = useSelector(characterPageSelectors.selectFirstEpisodeTitle())
        const {getCharacter, clearState} = useActions(characterPageActions)
        const history = useHistory();


        useEffect(() => {
            getCharacter(id)
            return () => {
                clearState()
            }
        }, [getCharacter, clearState, id])


        const goBack = () => {
            history.goBack();
        }

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
                    <div className={style.descriptionBlock}>
                        <div className={style.characterName}>
                            <h3>{character.name}</h3>
                        </div>
                        <div className={style.characterStatus}>
                            <span><span className={statusClassName}>{characterStatus}</span> - {character.gender} </span>
                        </div>
                        <div className={style.description}>
                            <span className={style.sectionTitle}> Last known location:</span>
                            <span className={style.descriptionName}>
                        {character.location?.name}
                    </span>
                        </div>
                        <div className={style.description}>
                            <span className={style.sectionTitle}> First seen in:</span>
                            <span className={style.descriptionName}>{firstEpisodeTitle}</span>
                        </div>
                    </div>
                    <Button onClick={goBack} variant="contained">
                        Back
                    </Button>
                </div>
            </div>
        );
    }
)
