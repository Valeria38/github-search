import { renderHook } from '@testing-library/react-hooks';

import { useDebounce } from 'hooks/useDebounce';

describe('useDebounce hook', () => {
  it('should set debounced value', () => {
    const { result } = renderHook(() => useDebounce('query', 700));
    expect(result.current).toEqual('query');
  });
});
