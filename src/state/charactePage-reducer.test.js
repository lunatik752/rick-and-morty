import {characterPageReducer, setCharacter} from "./charactePage-reducer";


let startState = {
    character: {},
    firstEpisodeTitle: ''
}


test('character should be added', () => {

    const newStatus =  {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
        ],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z"
    }
    const action = setCharacter(newStatus);
    const endState = characterPageReducer(startState, action)

    expect(endState.status).toBe('loading');
});


