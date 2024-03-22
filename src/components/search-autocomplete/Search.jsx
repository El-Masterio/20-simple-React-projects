import React, { useEffect, useState } from 'react';
import Suggesstions from './Suggesstions';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData = users?.length
        ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
        : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(e) {
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchUserData() {
    try {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();

      if (data?.users?.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data! Please wait...</h1>
      ) : (
        <input
          value={searchParam}
          type="text"
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}

      {showDropdown && (
        <Suggesstions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default Search;
