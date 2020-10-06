const SET_APP_STATUS = 'rick-and-morty/app/SET-APP-STATUS';


const initialState = {
    status: 'idle',
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APP_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const setAppStatus = (status) => {
    return {type: SET_APP_STATUS, status}
}

