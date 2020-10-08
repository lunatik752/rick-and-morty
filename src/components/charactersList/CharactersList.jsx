import React, {useState} from 'react';
import style from './CharactersList.module.scss'
import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {getCharactersList} from "../../state/charactersList-reducer";

export const CharactersList = () => {


    const dispatch = useDispatch()
    const charactersList = useSelector(state => state.charactersList.characters)
    const nextPage = useSelector(state => state.charactersList.info.next)


    let nextPageNumber = 1
    if (nextPage) {
        const index = nextPage.indexOf("?page=") + 6;
        nextPageNumber = Number(nextPage.slice(index))
    }



    let [hasMore, setHasMore] = useState(true)


    const fetchMoreData = () => {
        if (!nextPage) {
            setHasMore(false);
            return;
        }
        dispatch(getCharactersList(nextPageNumber))
    };


    return (
        <div className={style.wrapper}>
            <InfiniteScroll
                className={style.container}
                dataLength={charactersList.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={''}>
                {
                    charactersList.map(ch => <Character key={ch.id} character={ch}/>)
                }
            </InfiniteScroll>
        </div>
    );
}
