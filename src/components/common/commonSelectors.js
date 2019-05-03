export function getAuthToken(state) {
    return state.common.get('accessToken');
}