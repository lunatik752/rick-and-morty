export const SET_CHARACTER = 'rick-and-morty/characterPage/SET-CHARACTERS';
export const GET_CHARACTER = 'rick-and-morty/characterPage/GET-CHARACTER';
export const SET_FIRST_EPISODE_TITLE = 'rick-and-morty/characterPage/SET-FIRST-EPISODE-TITLE ';
export const GET_FIRST_EPISODE_TITLE = 'rick-and-morty/characterPage/GET-FIRST-EPISODE-TITLE ';


const initialState = {
    character: {},
    firstEpisodeTitle: ''
}


export const characterPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER:
            debugger
            return {
                ...state, character: action.character
            }
        case SET_FIRST_EPISODE_TITLE:
            return {
                ...state, firstEpisodeTitle: action.episode.name
            }
        default:
            return state
    }
}

// actions
export const setCharacter = (character) => ({type: SET_CHARACTER, character})

export const getCharacter = (id) => ({type: GET_CHARACTER, id})

export const setFirstEpisodeTitle = (episode) => ({type: SET_FIRST_EPISODE_TITLE, episode})



