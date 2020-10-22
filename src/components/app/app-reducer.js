export const SET_APP_STATUS = 'rick-and-morty/app/SET-APP-STATUS';
export const INITIALIZE_APP = 'rick-and-morty/app/INITIALIZE-APP';
export const SET_ERROR = 'rick-and-morty/app/SET-ERROR';


const initialState = {
    status: 'idle',
    isInitialized: false,
    error: null
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
        case SET_ERROR: {
            return {
                ...state,
                error: action.error}
        }
        default:
            return state
    }
}

// actions
const setAppStatus = (status) => ({type: SET_APP_STATUS, status})

const initializeApp = () => ( {type: INITIALIZE_APP})

const setAppError = (error) => ({type: SET_ERROR, error})

export const appActions = {
    setAppStatus,
    initializeApp,
    setAppError
}
