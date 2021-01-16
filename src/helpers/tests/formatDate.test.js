import formatDate from 'helpers/formatDate';

describe('formatDate function', () => {
  it('returns a string with date, month and year', () => {
    const date = formatDate('2013-10-15T17:47:11Z');
    expect(date).toEqual('15 Oct 2013');
  });
});
