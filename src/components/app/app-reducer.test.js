import {appReducer} from "./app-reducer";
import {appActions} from "./index";

let startState = {
    status: 'idle',
    isInitialized: false,
    error: null
}


test('status should be changed', () => {

    const newStatus = 'loading'
    const action = appActions.setAppStatus(newStatus);
    const endState = appReducer(startState, action)

    expect(endState.status).toBe('loading');
});


test('isInitialized should be changed', () => {

    const action = appActions.initializeApp();
    const endState = appReducer(startState, action)

    expect(endState.isInitialized).toBe(true);
});

test('error should be changed', () => {


    const error = 'some error';
    const action = appActions.setAppError(error);
    const endState = appReducer(startState, action)

    expect(endState.error).toBe(error);
});
