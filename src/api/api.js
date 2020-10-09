import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/',
});


export const charactersAPI = {
    getCharactersList(pageNumber) {
        return instance.get(`?page=${pageNumber}`)
    },
    getCharacter(id) {
        return  instance.get(`${id}`)
    },
    getFirstEpisodeTitle(episodeUrl) {
        return axios.get(episodeUrl)
    }
}

