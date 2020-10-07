import React, {useEffect} from 'react';
import style from './App.module.scss';
import Header from "./components/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {Main} from "./components/main/Main";
import {initializeApp, initializeAppTC} from "./state/app-reducer";
import CircularProgress from "@material-ui/core/CircularProgress";


const App = () => {
    const dispatch = useDispatch()
    console.log('app')

    useEffect(() => {
        dispatch(initializeApp())
    })
    const status = useSelector(state => state.app.status)
    const isInitialized = useSelector(state => state.app.isInitialized)


    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
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
