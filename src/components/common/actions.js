const Actions = {
    AUTH: 'to.AUTH',
    API_REQUEST: 'to.API_REQUEST'
};

export default Actions;

export function auth(isAuthenticated) {
    return { type: Actions.AUTH, isAuthenticated }
}
