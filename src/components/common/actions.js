const Actions = {
    SIGN_UP: 'to.SIGN_UP',
    SIGN_IN: 'to.SIGN_IN',
    SIGN_IN_SUCCESS: 'to.SIGN_IN_SUCCESS',
    API_REQUEST: 'to.API_REQUEST'
};

export default Actions;

export function signIn(credentials) {
    return { type: Actions.SIGN_IN, credentials }
}

export function signInSuccess(authData) {
    return { type: Actions.SIGN_IN_SUCCESS, authData }
}

export function signUp(newUserProfile) {
    return { type: Actions.SIGN_UP, newUserProfile }
}
