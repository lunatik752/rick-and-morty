const SET_CHARACTERS = 'rick-and-morty/charactersList/SET_CHARACTERS';


const initialState = {
    info: {},
    characters: []
}


export const charactersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS:
            return {
                ...state,
                info:  action.data.info,
                characters: [...state.characters].concat(action.data.results)
            }
        default:
            return state
    }
}

// actions
export const setCharactersList = (data) => ({type: SET_CHARACTERS, data});
