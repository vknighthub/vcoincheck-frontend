import { createSelector } from 'reselect';

export const getUserByUsername = (state, username) => 
    state.users.find((user) => user.username === username);


export const getUsers = () => createSelector([getUserByUsername], (user) => user);
