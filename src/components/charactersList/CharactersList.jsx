import React, {useState} from 'react';
import style from './CharactersList.module.scss'
import {Character} from "./Character";
import {useSelector} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {charactersListActions, charactersListSelectors} from "./";
import {useActions} from "../../state/store";

export const CharactersList = React.memo(() => {

    let [hasMore, setHasMore] = useState(true)

    const charactersList = useSelector(charactersListSelectors.selectCharactersList)
    const nextPage = useSelector(charactersListSelectors.selectNextPage)
const {getCharactersList} = useActions(charactersListActions)

    let nextPageNumber = 1
    if (nextPage) {
        const index = nextPage.indexOf("?page=") + 6;
        nextPageNumber = Number(nextPage.slice(index))
    }


    const fetchMoreData = () => {
        if (!nextPage) {
            setHasMore(false);
            return;
        }
        getCharactersList(nextPageNumber)
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
                    charactersList.map(ch => <Character key={ch.id}  character={ch}/>)
                }
            </InfiniteScroll>
        </div>
    );
})
