const Actions = {
    AUTH: 'to.AUTH',
};

export default Actions;

export function auth(isAuthenticated) {
    return { type: Actions.AUTH, isAuthenticated }
}
