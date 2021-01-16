import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getPage } from 'features/GhSearch/selectors';

const usePagination = (defaultPage) => {
  const [page, setPage] = useState(defaultPage);
  const reduxPage = useSelector(getPage);

  useEffect(() => {
    setPage(reduxPage);
  }, [reduxPage]);

  const handleChange = (newPage) => {
    setPage(newPage);
  };

  return {
    page,
    handleChange,
  };
};

export default usePagination;
