import { handleActions } from 'redux-actions';

import { statuses } from 'Constants';

import {
  setReposData,
  setReposError,
  setTotal,
  setReposStatus,
  setQuery,
  setPage,
} from 'features/GhSearch/actions';

const ghSearchState = {
  repos: [],
  status: statuses.none,
  total: 0,
  query: '',
  page: 1,
  error: '',
};

const ghSearch = handleActions(
  {
    [setReposData]: (state, { payload: { query, page, data } }) => ({
      ...state,
      repos: [...state.repos, { query, page, data }],
      status: statuses.success,
      query,
      page,
    }),
    [setReposError]: (state, { payload }) => ({
      ...state,
      error: payload,
      status: statuses.error,
    }),
    [setTotal]: (state, { payload }) => ({
      ...state,
      total: payload,
    }),
    [setReposStatus]: (state, { payload }) => ({
      ...state,
      status: payload,
    }),
    [setQuery]: (state, { payload }) => ({
      ...state,
      query: payload,
    }),
    [setPage]: (state, { payload }) => ({
      ...state,
      page: payload,
    }),
  },
  ghSearchState,
);

export default ghSearch;
