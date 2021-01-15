import { useSelector } from 'react-redux';

import SearchInput from 'features/GhSearch/components/SearchInput';
import ReposList from 'features/GhSearch/components/ReposList';
import Pagination from 'features/GhSearch/components/Pagination';

import usePagination from 'hooks/usePagination';

import { getRepos } from 'features/GhSearch/actions';

import { getTotal } from 'features/GhSearch/selectors';

const GhSearch = () => {
  const total = useSelector(getTotal);

  const { page, handleChange } = usePagination(1, getRepos);

  return (
    <>
      <SearchInput />
      <ReposList />
      <Pagination onChange={handleChange} page={page} total={total} />
    </>
  );
};

export default GhSearch;
