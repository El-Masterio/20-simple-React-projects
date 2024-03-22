import React from 'react';

const User = ({ user }) => {
  const {
    login,
    name,
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="user" />
      </div>
      <div className="user_content">
        <div className="user_header">
          <h3>
            <a
              href={`https://github.com/${login}`}
              target="_blank"
              rel="noreferrer"
              className="avatar_link"
            >
              {login}
            </a>
          </h3>
          <p>
            <strong>{name || 'User'}</strong> joined on{' '}
            {`${createdDate.getDate()} ${createdDate.toLocaleDateString(
              'en-us',
              {
                month: 'short',
              }
            )} ${createdDate.getFullYear()}`}
          </p>
        </div>
        <div className="user_stats">
          <p>
            Public Repos: <span>{public_repos}</span>
          </p>

          <p>
            Followers: <span>{followers}</span>{' '}
          </p>

          <p>
            following: <span>{following}</span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
