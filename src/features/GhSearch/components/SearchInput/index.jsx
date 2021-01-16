import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useDebounce } from 'hooks/useDebounce';

import { setQuery as setQueryAction } from 'features/GhSearch/actions';

import './styles.scss';

const SearchInput = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 700);

  useEffect(() => {
    debouncedQuery && dispatch(setQueryAction(debouncedQuery));
  }, [debouncedQuery]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      className="input"
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search the repository..."
    />
  );
};

export default SearchInput;
