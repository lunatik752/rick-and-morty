const SET_CHARACTERS = 'rick-and-morty/charactersList/SET_CHARACTERS';


const initialState = {
    characters: []
}


export const charactersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS:
        return {
        ...state, characters: action.characters
        }
        default:
            return state
    }
}

// actions
export const setCharactersList = (characters) => ({type: SET_CHARACTERS, characters});
