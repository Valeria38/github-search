import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { getQuery } from 'features/GhSearch/selectors';

import { ITEMS_PER_PAGE } from 'Constants';

import Prev from 'images/prev.svg';
import Next from 'images/next.svg';

import './styles.scss';

const Pagination = ({ total, page, onChange }) => {
  const query = useSelector(getQuery);
  const pagesCount = Math.ceil(total / ITEMS_PER_PAGE);
  const handlePrev = () => {
    page - 1 > 0 && onChange(query, page - 1);
  };

  const handleNext = () => {
    page + 1 <= pagesCount && onChange(query, page + 1);
  };

  const currentPages = pagesCount
    ? Array(pagesCount)
        .fill(null)
        .map((_, index) => index)
        .slice(page, page + 10)
    : [];

  return (
    <div className="pagination">
      <div
        className={classNames('pagination--item', { disabled: page === 1 })}
        onClick={handlePrev}
      >
        <Prev className={classNames('pagination--icon', { disabled: page === 1 })} />
      </div>
      {currentPages.map((currPage, index) => (
        <div
          key={index}
          className={classNames('pagination--item', { active: currPage === page })}
          onClick={() => onChange(query, currPage)}
        >
          {currPage}
        </div>
      ))}
      <div
        className={classNames('pagination--item', { disabled: page === pagesCount })}
        onClick={handleNext}
      >
        <Next className={classNames('pagination--icon', { disabled: page === pagesCount })} />
      </div>
    </div>
  );
};

export default Pagination;
