import { createSelector } from 'reselect';

export const getCKByName = (state, name) =>
    state.cardanoknowledge.find((ck) => ck.name === name);

export const getCK = () => createSelector([getCKByName], (ck) => ck);

