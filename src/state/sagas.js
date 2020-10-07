import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {INITIALIZE_APP} from "./app-reducer";
import {charactersAPI} from "../api/api";
import {setCharactersList} from "./charactersList-reducer";

export function* sagaWatcher() {
   yield takeLatest(INITIALIZE_APP, sagaWorker)
}

function* sagaWorker() {
   debugger
   const res = yield call(charactersAPI.getCharactersList)
   yield put(setCharactersList(res.data.results))
}
