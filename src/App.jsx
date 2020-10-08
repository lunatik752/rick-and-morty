import React, {useEffect} from 'react';
import style from './App.module.scss';
import Header from "./components/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {Main} from "./components/main/Main";
import {initializeApp} from "./state/app-reducer";
import CircularProgress from "@material-ui/core/CircularProgress";


const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    const status = useSelector(state => state.app.status)
    const isInitialized = useSelector(state => state.app.isInitialized)


    if (!isInitialized) {
        return <div className={style.circularProgress}>
            <CircularProgress/>
        </div>
    }

    return (

        <div className={style.app}>
            <Header status={status}/>
            <Main/>
        </div>
    );
}

export default App;
