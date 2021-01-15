import { useState } from 'react';
import { useDispatch } from 'react-redux';

const usePagination = (defaultPage, thunkCallback) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(defaultPage);

  const handleChange = (query, newPage) => {
    // console.log('query, newPage', query, newPage);
    setPage(newPage);
    dispatch(thunkCallback(query, newPage));
  };

  return {
    page,
    handleChange,
  };
};

export default usePagination;
