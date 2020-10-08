
export const SET_CHARACTER = 'rick-and-morty/characterPage/SET-CHARACTERS';
export const GET_CHARACTER = 'rick-and-morty/characterPage/GET-CHARACTER';


const initialState = {
    character: {}
}


export const characterPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER:
            return {
                ...state, character: action.character
            }
        default:
            return state
    }
}

// actions
export const setCharacter = (character) => ({type: SET_CHARACTER, character})

export const getCharacter = (id) => ({type: GET_CHARACTER, id})

