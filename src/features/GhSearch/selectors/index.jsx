import { createSelector } from 'reselect';

const ghSearch = (state) => state.ghSearch;

export const getReposStatus = createSelector(ghSearch, (state) => state.status);
export const getReposData = createSelector(ghSearch, ({ repos }) => repos);
export const getTotal = createSelector(ghSearch, ({ total }) => total);
export const getQuery = createSelector(ghSearch, ({ query }) => query);
