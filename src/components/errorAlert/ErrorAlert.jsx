import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert  from '@material-ui/lab/Alert'
import {useDispatch, useSelector} from "react-redux";
import {setAppError} from "../../state/app-reducer";



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar() {

    const error = useSelector( state => state.app.error)
    const dispatch = useDispatch()


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {

        }
        dispatch(setAppError(null))
    }

    return (
        <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>

    )
}


