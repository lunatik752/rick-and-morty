export const SET_CHARACTER = 'rick-and-morty/characterPage/SET-CHARACTERS';
export const GET_CHARACTER = 'rick-and-morty/characterPage/GET-CHARACTER';
export const SET_FIRST_EPISODE_TITLE = 'rick-and-morty/characterPage/SET-FIRST-EPISODE-TITLE';
export const CLEAR_STATE = 'rick-and-morty/characterPage/CLEAR-STATE';


const initialState = {
    character: {},
    firstEpisodeTitle: ''
}


export const characterPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER:
            return {
                ...state,
                character: action.character
            }
        case SET_FIRST_EPISODE_TITLE:
            return {
                ...state,
                firstEpisodeTitle: action.episode.name
            }
        case CLEAR_STATE:
            return {
                ...state,
                character: {},
                firstEpisodeTitle: ''
            }
        default:
            return state
    }
}

// actions
export const setCharacter = (character) => ({type: SET_CHARACTER, character})

export const getCharacter = (id) => ({type: GET_CHARACTER, id})

export const setFirstEpisodeTitle = (episode) => ({type: SET_FIRST_EPISODE_TITLE, episode})

export const clearState = () => ({type: CLEAR_STATE})



