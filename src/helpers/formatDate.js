import { months } from 'Constants';

const formatDate = (str) => {
  const date = new Date(str);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export default formatDate;
