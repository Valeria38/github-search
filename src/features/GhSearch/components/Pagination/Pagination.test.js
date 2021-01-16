import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import store from 'store';
import Pagination from './index';

import '@testing-library/jest-dom';

describe('Pagination component', () => {
  const setUp = (extraProps) => {
    const props = {
      total: 65,
      page: 1,
      onChange: jest.fn(),
      ...extraProps,
    };
    store.dispatch({ type: 'SET_QUERY', payload: 'tet' });
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <Pagination {...props} />
      </Provider>,
    );
    return {
      getByTestId,
      getAllByTestId,
      store,
      props,
    };
  };

  it('renders pagination', () => {
    const { getByTestId } = setUp();
    expect(getByTestId('pagination')).toBeDefined();
  });

  it('shows correct active page', () => {
    const activePage = 1;
    const { getAllByTestId } = setUp({ page: activePage });
    const pages = getAllByTestId('page');
    expect(Object.values(pages[0].classList).includes('active')).toBeTruthy();
  });

  it('shows 10 pages when pages amount is greater than default amount(equals to 10)', () => {
    const { getAllByTestId } = setUp({ total: 320 });
    const pages = getAllByTestId('page');
    expect(pages.length).toEqual(10);
  });

  it('shows 5 pages when pages amount is equals to 5( and less than default 10)', () => {
    const { getAllByTestId } = setUp({ total: 140 });
    const pages = getAllByTestId('page');
    expect(pages.length).toEqual(5);
  });

  it('fires an event handler on pagination button click', () => {
    const { getAllByTestId, props } = setUp();
    const pages = getAllByTestId('page');
    fireEvent.click(pages[1]);
    expect(props.onChange.mock.calls.length).toBe(1);
  });

  it('disables prev button when we are on the first page', () => {
    const { getByTestId } = setUp({ page: 1 });
    const prev = getByTestId('prev');
    expect(Object.values(prev.classList).includes('disabled')).toBeTruthy();
  });

  it('disables next button when we are on the last page', () => {
    const { getByTestId } = setUp({ page: 5, total: 140 });
    const next = getByTestId('next');
    expect(Object.values(next.classList).includes('disabled')).toBeTruthy();
  });
});
