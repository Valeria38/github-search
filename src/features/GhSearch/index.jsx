import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import SearchInput from 'features/GhSearch/components/SearchInput';
import ReposList from 'features/GhSearch/components/ReposList';
import Pagination from 'features/GhSearch/components/Pagination';

import usePagination from 'hooks/usePagination';

import useRepos from 'features/GhSearch/hooks/useRepos';

import { getTotal, getPage, getQuery, getReposData } from 'features/GhSearch/selectors';

import './styles.scss';

const GhSearch = () => {
  const [repos, setRepos] = useState([]);
  const reduxRepos = useSelector(getReposData);
  const total = useSelector(getTotal);
  const reduxPage = useSelector(getPage);
  const query = useSelector(getQuery);

  const { page, handleChange } = usePagination(reduxPage);

  const { cachedRepos } = useRepos(query, page);

  useEffect(() => {
    if (!cachedRepos) {
      const repos = reduxRepos.find((repo) => repo.query === query && repo.page === page);
      setRepos(repos?.data);
    } else {
      setRepos(cachedRepos.data);
    }
  }, [cachedRepos, reduxRepos]);

  return (
    <main className="main">
      <SearchInput />
      <ReposList repos={repos} />
      <Pagination onChange={handleChange} page={page} total={total} />
    </main>
  );
};

export default GhSearch;
