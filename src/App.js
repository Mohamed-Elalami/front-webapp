import React, { useEffect, useState } from 'react';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await instance.get('/users');
    setUsers(response.data);
  }

  async function addUser() {
    const response = await instance.post('/users', {
      name,
      lastname,
      email
    });
    setUsers([...users, response.data]);
    setName('');
    setLastname('');
    setEmail('');
  }

  return (
    <div>
            <h1>Create User</h1>
      <form onSubmit={e => { e.preventDefault(); addUser(); }}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Lastname" value={lastname} onChange={e => setLastname(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button type="submit">Create User</button>
      </form>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <p>Name: {user.name}</p>
            <p>Lastname: {user.lastname}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
