import React, { useEffect, useState } from 'react';
import User from './User';
import './style.css';
const GitFinder = () => {
  const [username, setUsername] = useState('El-Masterio');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);

      const data = await res.json();

      if (data) {
        setUserData(data);
        setLoading(false);
        setUsername('');
        console.log(userData);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h3>Loading User Data! Please wait...</h3>;
  }
  if (errorMsg) {
    return <h3>{errorMsg}</h3>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
        {userData && <User user={userData} />}
      </div>
    </div>
  );
};

export default GitFinder;
