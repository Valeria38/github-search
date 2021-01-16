import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getReposData } from 'features/GhSearch/selectors';

import { getRepos } from 'features/GhSearch/actions';

const useRepos = (query, page) => {
  const dispatch = useDispatch();
  const repos = useSelector(getReposData);
  const [cachedRepos, setCachedRepos] = useState(null);

  useEffect(() => {
    if (!query) return;

    const cachedRepos = repos.find((repo) => repo.query === query && repo.page === page);
    setCachedRepos(cachedRepos);

    if (!cachedRepos) {
      dispatch(getRepos(query, page));
    }
  }, [query, page]);

  return {
    cachedRepos,
  };
};

export default useRepos;
