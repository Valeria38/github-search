import { useState, useEffect } from 'react';

import Star from 'images/star.svg';
import NoData from 'images/noData.svg';

import formatDate from 'helpers/formatDate';
import sortByField from 'helpers/sortByField';

import './styles.scss';

const ReposList = ({ repos }) => {
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    if (repos) {
      const sorted = sortByField([...repos], 'stargazers_count');
      setSorted(sorted);
    }
  }, [repos]);

  return sorted.length ? (
    <section className="repos">
      {sorted.map((repo) => (
        <a
          href={repo.html_url}
          key={repo.id}
          className="repos-link"
          target="_blank"
        >
          <div className="repos-repo">
            <div>
              <Star className="repos-repo-icon" />
              {repo.stargazers_count}
            </div>
            <div className="repos-repo-name">{repo.name}</div>
            <div>{repo.description}</div>
            <div>
              Owner:&nbsp;
              <span className="repos-repo-owner">{repo.owner.login}</span>
            </div>
            <div>Created on {formatDate(repo.created_at)}</div>
            <div>Watchers: {repo.watchers_count}</div>
            <img
              className="repos-avatar"
              src={repo.owner.avatar_url}
              alt="owner-avatar"
            />
          </div>
        </a>
      ))}
    </section>
  ) : (
    <div className="repos--no-data">
      No data.
      <NoData className="repos--empty-icon" />
    </div>
  );
};

export default ReposList;
