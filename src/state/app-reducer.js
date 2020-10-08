

export const SET_APP_STATUS = 'rick-and-morty/app/SET-APP-STATUS';
export const INITIALIZE_APP = 'rick-and-morty/app/INITIALIZE-APP';


const initialState = {
    status: 'idle',
    isInitialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APP_STATUS:
            return {
                ...state,
                status: action.status
            }
        case INITIALIZE_APP:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}


// actions
export const setAppStatus = (status) => {
    return {type: SET_APP_STATUS, status}
}

export const initializeApp = () => {
    return {type: INITIALIZE_APP}
}


// export const initializeAppTC = () => async (dispatch) => {
//     const res = await charactersAPI.getCharactersList()
//     dispatch(setCharactersList(res.data.results));
//     dispatch(initializeApp())
// }
