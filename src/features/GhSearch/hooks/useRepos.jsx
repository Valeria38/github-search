import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getReposData } from 'features/GhSearch/selectors';

import { getRepos, setStatus } from 'features/GhSearch/actions';

import { statuses } from 'Constants';

const useRepos = (query, page) => {
  const dispatch = useDispatch();
  const repos = useSelector(getReposData);
  const [cachedRepos, setCachedRepos] = useState(null);

  useEffect(() => {
    const cachedRepos = repos.find(
      (repo) => repo.query === query && repo.page === page,
    );
    setCachedRepos(cachedRepos);

    if (!cachedRepos) {
      dispatch(getRepos(query, page));
    } else if (query) {
      dispatch(setStatus(statuses.success));
    } else if (!query) {
      dispatch(setStatus(statuses.none));
    }
  }, [query, page]);

  return {
    cachedRepos,
  };
};

export default useRepos;
