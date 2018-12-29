import Actions from './actions';

const initialState = {
    isAuthenticated: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case Actions.AUTH:
            return handleAuth(state, action);
    }
    return state;
}

function handleAuth(state, {isAuthenticated}) {
    return state.set('isAuthenticated', isAuthenticated);
}