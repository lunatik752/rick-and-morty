import React from 'react';
import style from './App.module.scss';
import Header from "./components/header/Header";
import {useSelector} from "react-redux";


const App = () => {
    const initialized = useSelector(state => state.app.initialized)

    return (

        <div className={style.app}>
            <Header initialized={initialized}/>
        </div>
    );
}

export default App;
