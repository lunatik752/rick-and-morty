import {appReducer, setAppStatus} from "./app-reducer";

let startState = {
    status: 'idle',
}


test('status should be changed', () => {

    const newStatus = 'loading'
    const action = setAppStatus(newStatus);
    const endState = appReducer(startState, action)

    expect(endState.status).toBe('loading');
});


