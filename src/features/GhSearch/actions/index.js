import { createAction } from 'redux-actions';

import { statuses } from 'Constants';

export const setReposStatus = createAction('SET_REPOS_STATUS', (status) => status);
export const setReposData = createAction('SET_REPOS_DATA', (data) => ({
  data,
}));
export const setTotal = createAction('SET_TOTAL', (total) => total);
export const setReposError = createAction('SET_REPOS_ERROR', (error) => error);
export const setQuery = createAction('SET_QUERY', (query) => query);

export const getRepos = (query, page) => (dispatch) => {
  console.log('GET REPOS');
  dispatch(setReposStatus(statuses.loading));
  fetch(`${process.env.API_URL}/search/repositories?q=${query}&page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log('action data', data);
      dispatch(setReposData(data.items));
      dispatch(setTotal(data.total_count));
      dispatch(setQuery(query));
    })
    .catch((err) => setReposError(err));
};
