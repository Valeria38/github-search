import sortByField from 'helpers/sortByField';

describe('sortByField function', () => {
  const arr = [
    {
      stargazers_count: 4345,
      name: 'repository 1',
    },
    {
      stargazers_count: 5,
      name: 'repository 2',
    },
    {
      stargazers_count: 8353,
      name: 'repository 3',
    },
  ];

  it('returns sorted by field array of objects', () => {
    const sorted = sortByField(arr, 'stargazers_count');
    expect(sorted[0].name).toBe('repository 3');
  });

  it('returns a new array', () => {
    const sorted = sortByField(arr, 'stargazers_count');
    expect(sorted).not.toEqual(arr);
  });
});
