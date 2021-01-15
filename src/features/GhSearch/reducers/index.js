import { handleActions } from 'redux-actions';

import { statuses } from 'Constants';

import { setReposData, setReposError, setTotal, setReposStatus } from 'features/GhSearch/actions';

const ghSearchState = {
  repos: [],
  status: statuses.none,
  total: 0,
};

const ghSearch = handleActions(
  {
    [setReposData]: (state, { payload }) => ({
      ...state,
      repos: payload,
      status: statuses.success,
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
  },
  ghSearchState,
);

export default ghSearch;
