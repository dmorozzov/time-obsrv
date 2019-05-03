import axios from 'axios';

export function fetchEventGroups(payload, token) {
    return performPost('/event/groups', payload, token);
}

export function saveEventGroup(payload, token) {
    return performPost('/event/group-save', payload, token);
}

export function signUp(payload) {
    return performPost('/auth/sign-up', payload);
}

export function signIn(payload) {
    return performPost('/auth/sign-in', payload);
}

function performPost(path, payload, token) {
    return axios.post('/api' + path, payload, generateHeaders(token));
}

function generateHeaders(token) {
    if (!token) {
        return undefined;
    }
    return {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    };
}
