import {call, put, takeEvery} from 'redux-saga/effects'
import {INITIALIZE_APP, setAppError, setAppStatus} from "./app-reducer";
import {charactersAPI} from "../api/api";
import {GET_CHARACTERS_LIST, setCharactersList} from "./charactersList-reducer";
import {GET_CHARACTER, setCharacter} from "./charactePage-reducer";

export function* watcherInitializeApp() {
    yield takeEvery(INITIALIZE_APP, workerInitializeApp)
}

function* workerInitializeApp() {
    try {
    const res = yield call(charactersAPI.getCharactersList)
    yield put(setCharactersList(res.data))
} catch (error) {
    yield put(setAppError(error.message ? {error: error.message} : {error: 'Some error occurred'}))
    yield put(setAppStatus('failed'))
}
}

export function* watcherGetCharacter() {
    yield takeEvery(GET_CHARACTER, workerGetCharacter)
}

function* workerGetCharacter(action) {
    yield put(setAppStatus('loading'))
    try {
        const res = yield call(charactersAPI.getCharacter, action.id)
        yield put(setCharacter(res.data))
        yield put(setAppStatus('success'))
    } catch (error) {
        yield put(setAppError(error.message ? {error: error.message} : {error: 'Some error occurred'}))
        yield put(setAppStatus('failed'))
    }
}

export function* watcherGetCharactersList() {
    yield takeEvery(GET_CHARACTERS_LIST, workerGetCharactersList)
}

function* workerGetCharactersList(action) {
    yield put(setAppStatus('loading'))
    try {
        const res = yield call(charactersAPI.getCharactersList, action.nextPageNumber)
        yield put(setCharactersList(res.data))
        yield put(setAppStatus('success'))
    } catch (error) {
        yield put(setAppError(error.message ? {error: error.message} : {error: 'Some error occurred'}))
        yield put(setAppStatus('failed'))
    }
}
