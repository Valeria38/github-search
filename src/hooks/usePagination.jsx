import { useState } from 'react';

const usePagination = (defaultPage) => {
  const [page, setPage] = useState(defaultPage);

  const handleChange = (newPage) => {
    setPage(newPage);
  };

  return {
    page,
    handleChange,
  };
};

export default usePagination;
