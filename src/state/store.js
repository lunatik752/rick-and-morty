import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./sagas";
import {charactersListReducer} from "./charactersList-reducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    app: appReducer,
    charactersList: charactersListReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaWatcher)

window.store = store;
