import {call, put, takeEvery} from 'redux-saga/effects'
import {INITIALIZE_APP} from "./app-reducer";
import {charactersAPI} from "../api/api";
import {setCharactersList} from "./charactersList-reducer";
import {GET_CHARACTER, setCharacter} from "./charactePage-reducer";

export function* watcherInitializeApp() {
   yield takeEvery(INITIALIZE_APP, workerInitializeApp)
}

function* workerInitializeApp() {
   const res = yield call(charactersAPI.getCharactersList)
   yield put(setCharactersList(res.data))
}

export function* watcherGetCharacter() {
   yield takeEvery(GET_CHARACTER, workerGetCharacter)
}

function* workerGetCharacter(action) {
   const res = yield call(charactersAPI.getCharacter, action.id)
   yield put(setCharacter(res.data))
}
