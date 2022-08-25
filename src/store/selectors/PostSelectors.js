import { createSelector } from 'reselect';

export const getLibraryByName = (state, name) => 
    state.library.find((library) => library.name === name);

export const getPost = () => createSelector([getLibraryByName], (library) => library);
