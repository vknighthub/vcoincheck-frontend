import { createSelector } from 'reselect';

export const getBKByName = (state, name) => 
    state.blockchainknowledge.find((bk) => bk.name === name);


export const getBK = () => createSelector([getBKByName], (bk) => bk);
