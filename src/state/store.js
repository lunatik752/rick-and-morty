import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware, thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


sagaMiddleware.run(watcherInitializeApp)
sagaMiddleware.run(watcherGetCharacter)
sagaMiddleware.run(watcherGetCharactersList)


window.store = store;
