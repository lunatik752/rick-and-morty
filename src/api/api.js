import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character/',
    withCredentials: true,
});


export const charactersAPI = {
    getCharactersList(page) {
        return  instance.get(`?page=${page}`)
    },
    getCharacter(id) {
        return  instance.get(`${id}`)
    }
}
