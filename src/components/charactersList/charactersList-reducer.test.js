import {charactersListReducer} from "./charactersList-reducer";
import {charactersListActions} from "./index";


let startState = {
    info: {},
    characters: []
}


test('data should be added', () => {

    const newCharactersList = {
        info: {
            count: 671,
            pages: 34,
            next: "https://rickandmortyapi.com/api/character/?page=4",
            prev: "https://rickandmortyapi.com/api/character/?page=2"
        },
        results: [
            {
                id: 42,
                name: "Big Head Morty",
                status: "unknown",
                species: "Human",
                type: "Human with giant head",
                gender: "Male",
                origin: {
                    name: "unknown",
                    url: ""
                },
                location: {
                    name: "Citadel of Ricks",
                    url: "https://rickandmortyapi.com/api/location/3"
                },
                image: "https://rickandmortyapi.com/api/character/avatar/42.jpeg",
                episode: [
                    "https://rickandmortyapi.com/api/episode/22"
                ],
                url: "https://rickandmortyapi.com/api/character/42",
                created: "2017-11-05T10:15:53.349Z"
            },
            {
                id: 43,
                name: "Big Head Morty",
                status: "unknown",
                species: "Human",
                type: "Human with giant head",
                gender: "Male",
                origin: {
                    name: "unknown",
                    url: ""
                },
                location: {
                    name: "Citadel of Ricks",
                    url: "https://rickandmortyapi.com/api/location/3"
                },
                image: "https://rickandmortyapi.com/api/character/avatar/42.jpeg",
                episode: [
                    "https://rickandmortyapi.com/api/episode/22"
                ],
                url: "https://rickandmortyapi.com/api/character/42",
                created: "2017-11-05T10:15:53.349Z"
            }
        ]
    }

    const action = charactersListActions.setCharactersList(newCharactersList);
    const endState = charactersListReducer(startState, action)

    expect(endState.info.pages).toBe(34);
    expect(endState.characters.length).toBe(2)
});

