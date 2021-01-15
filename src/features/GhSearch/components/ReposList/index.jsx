import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getReposData } from 'features/GhSearch/selectors';

import './styles.scss';

const ReposList = () => {
  const repos = useSelector(getReposData);
  // console.log('repos', repos);
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    repos.length && sort('stargazers_count');
  }, [repos]);

  const sort = (field) => {
    const sorted = repos.sort((a, b) => b[field] - a[field]);
    setSorted(sorted);
  };

  return sorted.map((repo) => (
    <div className="repo" key={repo.id}>
      <div>Repository name: {repo.name}</div>
      <div>Stars: {repo.stargazers_count}</div>
      <div>Owner: {repo.owner.login}</div>
    </div>
  ));
};

export default ReposList;
