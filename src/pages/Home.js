import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the React and Spring Boot Integration App.</p>
      <Link to="/create-user">Create User</Link>
      <br />
      <Link to="/user-list">List Users</Link>
    </div>
  );
};

export default Home;