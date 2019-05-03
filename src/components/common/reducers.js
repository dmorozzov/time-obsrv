import Actions from './actions';

const initialState = {
    isAuthenticated: false,
    accessToken: undefined
};

export default function(state = initialState, action) {
    switch (action.type) {
        case Actions.SIGN_IN_SUCCESS:
            return handleAuth(state, action);
    }
    return state;
}

function handleAuth(state, {authData}) {
    return state.set('isAuthenticated', true).set('accessToken', authData.accessToken);
}
