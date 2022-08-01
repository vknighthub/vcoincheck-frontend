import { createSelector } from "reselect";

export const getNewsByName = (state, name) =>
    state.news.find((news) => news.name === name);

export const getNews = () => createSelector([getNewsByName], (ck) => ck);
