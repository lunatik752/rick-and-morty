const SET_CHARACTERS = 'rick-and-morty/charactersList/SET-CHARACTERS';
export const GET_CHARACTERS_LIST = 'rick-and-morty/charactersList/SET-CHARACTERS-LIST';


const initialState = {
    info: {},
    characters: []
}


export const charactersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS:
            return {
                ...state,
                info: action.data.info,
                characters: [...state.characters].concat(action.data.results)
            }
        default:
            return state
    }
}

// actions
const setCharactersList = (data) => ({type: SET_CHARACTERS, data});

const getCharactersList = (nextPageNumber) => ({type: GET_CHARACTERS_LIST, nextPageNumber});

export const actions = {
    setCharactersList,
    getCharactersList
}
