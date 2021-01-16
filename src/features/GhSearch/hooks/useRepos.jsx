import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getReposData } from 'features/GhSearch/selectors';

import { getRepos } from 'features/GhSearch/actions';

import usePrevious from 'hooks/usePrevious';

const useRepos = (query, page) => {
  const dispatch = useDispatch();
  const repos = useSelector(getReposData);
  const [cachedRepos, setCachedRepos] = useState(null);

  const prevQuery = usePrevious(query);

  useEffect(() => {
    if (!query) return;

    const cachedRepos = repos.find((repo) => repo.query === query && repo.page === page);
    setCachedRepos(cachedRepos);

    if (!cachedRepos) {
      const updatedPage = query === prevQuery ? page : 1;
      dispatch(getRepos(query, updatedPage));
    }
  }, [query, page, prevQuery]);

  return {
    cachedRepos,
  };
};

export default useRepos;
