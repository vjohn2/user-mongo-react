import React from 'react';
import UserForm from '../components/UserForm';
import { Link } from 'react-router-dom';

const CreateUser = () => {
  return (
    <div>
      <UserForm /><br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default CreateUser;