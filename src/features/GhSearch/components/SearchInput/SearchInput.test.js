import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import store from 'store';
import SearchInput from './index';

import '@testing-library/jest-dom';

describe('SearchInput component', () => {
  const setUp = () => {
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <SearchInput />
      </Provider>,
    );
    return { getByTestId, getAllByTestId, store };
  };

  it('renders input', () => {
    const { getByTestId } = setUp();
    expect(getByTestId('search-input')).toBeDefined();
  });

  it('fires an event handler on change', () => {
    const { getByTestId } = setUp();
    const input = getByTestId('search-input');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });
});
