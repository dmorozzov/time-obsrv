import axios from 'axios';

export function fetchEvents(payload) {
    return axios.post('/api/event/list', payload);
};
