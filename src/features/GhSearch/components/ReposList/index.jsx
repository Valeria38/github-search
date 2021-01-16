import { useState, useEffect } from 'react';

import './styles.scss';

const ReposList = ({ repos }) => {
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    if (repos) {
      const sorted = sort([...repos], 'stargazers_count');
      setSorted(sorted);
    }
  }, [repos]);

  const sort = (array, field) => {
    return array.sort((a, b) => b[field] - a[field]);
  };

  return sorted ? (
    sorted.map((repo) => (
      <div className="repo" key={repo.id}>
        <div>Repository name: {repo.name}</div>
        <div>Stars: {repo.stargazers_count}</div>
        <div>Owner: {repo.owner.login}</div>
      </div>
    ))
  ) : (
    <div>No items.</div>
  );
};

export default ReposList;
