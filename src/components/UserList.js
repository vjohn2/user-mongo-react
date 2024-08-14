import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id}> {user.name} - {user.email}</li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;