import { createSelector } from 'reselect';

const ghSearch = (state) => state.ghSearch;

export const getReposStatus = createSelector(ghSearch, (state) => state.isSignedIn);
export const getReposData = createSelector(ghSearch, ({ name, email }) => ({ name, email }));
