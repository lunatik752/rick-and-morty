import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import {useSelector} from "react-redux";
import {appActions} from "../app/app-reducer";
import {useActions} from "../../state/store";


const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const ErrorSnackbar = () => {

    const error = useSelector(state => state.app.error)
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


