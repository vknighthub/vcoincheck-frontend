import { createSelector } from 'reselect';

export const getPostById = (state, postId) => 
    state.posts.posts.find((post) => post.id === postId);

export const getLibrary = () => createSelector([getPostById], (post) => post);
