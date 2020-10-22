import {appReducer, initializeApp, setAppError, setAppStatus} from "./app-reducer";

let startState = {
    status: 'idle',
    isInitialized: false,
    error: null
}


test('status should be changed', () => {

    const newStatus = 'loading'
    const action = setAppStatus(newStatus);
    const endState = appReducer(startState, action)

    expect(endState.status).toBe('loading');
});


test('isInitialized should be changed', () => {

    const action = initializeApp();
    const endState = appReducer(startState, action)

    expect(endState.isInitialized).toBe(true);
});

test('error should be changed', () => {


    const error = 'some error';
    const action = setAppError(error);
    const endState = appReducer(startState, action)

    expect(endState.error).toBe(error);
});
