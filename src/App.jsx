import React from 'react';
import style from './App.module.scss';
import Header from "./components/header/Header";
import {useSelector} from "react-redux";
import {Main} from "./components/main/Main";


const App = () => {
    const status = useSelector(state => state.app.status)

    return (

        <div className={style.app}>
            <Header status={status}/>
            <Main/>
        </div>
    );
}

export default App;
