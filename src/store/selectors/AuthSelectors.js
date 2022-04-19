export const isAuthenticated = (state) => {
    if (state.auth.auth.result.token) return true;
    return false;
};
export const isAdmin = (state) => {
    if (state.auth.auth.result.isadmin) return true;
    return false;
}
export const UserDetails = (state) => {
    return state.auth.auth.result
}
export const AccessPath = (state) => {
    return state.auth.auth.result.routes;
}
export const MenuList = (state) => {
    return state.auth.auth.result.menu;
}