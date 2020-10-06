import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

window.store = store;
