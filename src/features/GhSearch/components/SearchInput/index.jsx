import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useDebounce } from 'hooks/useDebounce';

import { getRepos } from 'features/GhSearch/actions';

const SearchInput = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 700);

  useEffect(() => {
    debouncedQuery && dispatch(getRepos(debouncedQuery));
  }, [debouncedQuery]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return <input type="text" value={query} onChange={handleChange} />;
};

export default SearchInput;
