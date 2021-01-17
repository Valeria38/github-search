import { createAction } from 'redux-actions';

import { statuses } from 'Constants';

export const setReposStatus = createAction(
  'SET_REPOS_STATUS',
  (status) => status,
);
export const setReposData = createAction('SET_REPOS_DATA');
export const setTotal = createAction('SET_TOTAL');
export const setReposError = createAction('SET_REPOS_ERROR');
export const setQuery = createAction('SET_QUERY');
export const setPage = createAction('SET_PAGE');
export const setStatus = createAction('SET_STATUS');

/* eslint-disable no-undef */
export const getRepos = (query, page) => (dispatch) => {
  if (!query) {
    dispatch(setReposData({ query, page, data: [] }));
    dispatch(setStatus(statuses.none));
    return;
  }
  dispatch(setReposStatus(statuses.loading));
  fetch(`${process.env.API_URL}/search/repositories?q=${query}&page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setReposData({ query, page, data: data.items }));
      dispatch(setTotal(data.total_count));
      if (!data.items.length) {
        dispatch(setStatus(statuses.empty));
      }
    })
    .catch((err) => {
      setReposError(err);
    });
};
