import React, {useEffect} from 'react';
import style from './App.module.scss';
import {Header} from "../header/Header";
import {useSelector} from "react-redux";
import {Main} from "../main/Main";
import {appActions} from "./app-reducer";
import CircularProgress from "@material-ui/core/CircularProgress";
import {ErrorSnackbar} from "../errorAlert/ErrorAlert";
import {useActions} from "../../state/store";
import {appSelectors} from "./index";


const App = React.memo(() => {

        const {initializeApp} = useActions(appActions)


        useEffect(() => {
            initializeApp()
        }, [initializeApp])

        const status = useSelector(appSelectors.selectStatus)
        const isInitialized = useSelector(appSelectors.selectIsInitialized)


        if (!isInitialized) {
            return <div className={style.circularProgress}>
                <CircularProgress/>
            </div>
        }

        return (

            <div className={style.app}>
                <ErrorSnackbar/>
                <Header status={status}/>
                <Main/>
            </div>
        );
    }
)

export default App;
