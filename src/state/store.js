import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer";
import createSagaMiddleware from 'redux-saga'
import {watcherGetCharacter, watcherGetCharactersList, watcherInitializeApp} from "./sagas";
import {charactersListReducer} from "./charactersList-reducer";
import {characterPageReducer} from "./charactePage-reducer";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    app: appReducer,
    charactersList: charactersListReducer,
    characterPage: characterPageReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, thunk));


sagaMiddleware.run(watcherInitializeApp)
sagaMiddleware.run(watcherGetCharacter)
sagaMiddleware.run(watcherGetCharactersList)


window.store = store;
