import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import {useSelector} from "react-redux";
import {useActions} from "../../state/store";
import {appActions, appSelectors} from "../app";


const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const ErrorSnackbar = () => {

    const error = useSelector(appSelectors.selectError)
    const {setAppError} = useActions(appActions)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        }
        setAppError(null)
    }

    return (
        <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>

    )
}


