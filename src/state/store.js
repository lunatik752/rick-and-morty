import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
})

export const store = createStore(rootReducer);

window.store = store;
