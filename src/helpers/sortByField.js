const sortByField = (array, field) =>
  [...array].sort((a, b) => b[field] - a[field]);

export default sortByField;
