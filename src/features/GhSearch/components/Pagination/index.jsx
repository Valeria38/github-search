import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { ITEMS_PER_PAGE, VISIBLE_PAGES } from 'Constants';

import { getQuery } from 'features/GhSearch/selectors';

import usePrevious from 'hooks/usePrevious';

import Prev from 'images/prev.svg';
import Next from 'images/next.svg';

import './styles.scss';

const Pagination = ({ total, page, onChange }) => {
  const pagesCount = Math.ceil(total / ITEMS_PER_PAGE);
  const query = useSelector(getQuery);
  const prevQuery = usePrevious(query);

  useEffect(() => {
    if (query !== prevQuery && prevQuery !== undefined) {
      onChange(1);
    }
  }, [query, prevQuery]);

  const handlePrev = () => {
    page - 1 > 0 && onChange(page - 1);
  };

  const handleNext = () => {
    page + 1 <= pagesCount && onChange(page + 1);
  };

  const pages = pagesCount
    ? Array(pagesCount)
        .fill(null)
        .map((_, index) => index + 1)
    : [];

  const currentPages =
    pagesCount > VISIBLE_PAGES
      ? pages.slice(page - 1, page + VISIBLE_PAGES - 1)
      : pages;

  return (
    <div
      className={classNames('pagination', { hidden: !query })}
      data-testid="pagination"
    >
      <div
        className={classNames('pagination--item', { disabled: page === 1 })}
        onClick={handlePrev}
      >
        <Prev
          className={classNames('pagination--icon', { disabled: page === 1 })}
          data-testid="prev"
        />
      </div>
      {currentPages.map((currPage, index) => (
        <div
          key={index}
          className={classNames('pagination--item', {
            active: currPage === page,
          })}
          onClick={() => onChange(currPage)}
          data-testid="page"
        >
          {currPage}
        </div>
      ))}
      <div
        className={classNames('pagination--item', {
          disabled: page === pagesCount,
        })}
        onClick={handleNext}
      >
        <Next
          className={classNames('pagination--icon', {
            disabled: page === pagesCount,
          })}
          data-testid="next"
        />
      </div>
    </div>
  );
};

export default Pagination;
