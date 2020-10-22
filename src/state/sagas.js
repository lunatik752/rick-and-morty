import {call, put, takeEvery} from 'redux-saga/effects'
import {INITIALIZE_APP} from "../components/app/app-reducer";
import {charactersAPI} from "../api/api";
import {appActions} from "../components/app";
import {characterPageActions} from "../components/characterPage";
import {charactersListActions} from "../components/charactersList";
import {GET_CHARACTER} from "../components/characterPage/characterPage-reducer";
import {GET_CHARACTERS_LIST} from "../components/charactersList/charactersList-reducer";


export function* watcherInitializeApp() {
    yield takeEvery(INITIALIZE_APP, workerInitializeApp)
}

function* workerInitializeApp() {
    try {
        const res = yield call(charactersAPI.getCharactersList)
        yield put(charactersListActions.setCharactersList(res.data))
    } catch (error) {
        yield put(appActions.setAppError(error.message ? {error: error.message} : {error: 'Some error occurred'}))
        yield put(appActions.setAppStatus('failed'))
    }
}

export function* watcherGetCharacter() {
    yield takeEvery(GET_CHARACTER, workerGetCharacter)
}

function* workerGetCharacter(action) {
    yield put(appActions.setAppStatus('loading'))
    try {
        const res1 = yield call(charactersAPI.getCharacter, action.id)
        yield put(characterPageActions.setCharacter(res1.data))
        const res2 = yield call(charactersAPI.getFirstEpisodeTitle, res1.data.episode[0])
        yield put(characterPageActions.setFirstEpisodeTitle(res2.data))
        yield put(appActions.setAppStatus('success'))
    } catch (error) {
        yield put(appActions.setAppError(error.message ? {error: error.message} : {error: 'Some error occurred'}))
        yield put(appActions.setAppStatus('failed'))
    }
}

export function* watcherGetCharactersList() {
    yield takeEvery(GET_CHARACTERS_LIST, workerGetCharactersList)
}

function* workerGetCharactersList(action) {
    yield put(appActions.setAppStatus('loading'))
    try {
        const res = yield call(charactersAPI.getCharactersList, action.nextPageNumber)
        yield put(charactersListActions.setCharactersList(res.data))
        yield put(appActions.setAppStatus('success'))
    } catch (error) {
        yield put(appActions.setAppError(error.message ? {error: error.message} : {error: 'Some error occurred'}))
        yield put(appActions.setAppStatus('failed'))
    }
}
