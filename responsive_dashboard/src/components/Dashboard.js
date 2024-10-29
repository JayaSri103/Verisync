import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import Modal from './Modal';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchQuery = e.target.value.toLowerCase();
    setFilteredUsers(users.filter(user =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.username.toLowerCase().includes(searchQuery)
    ));
  };

  const handleSort = (option) => {
    const sortedUsers = [...filteredUsers].sort((a, b) =>
      a[option].localeCompare(b[option])
    );
    setFilteredUsers(sortedUsers);
  };

  const openModal = (user) => setSelectedUser(user);
  const closeModal = () => setSelectedUser(null);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by name or username"
            value={searchTerm}
            onChange={handleSearch}
            className="border p-2 rounded w-full"
          />
          <select onChange={(e) => handleSort(e.target.value)} className="border p-2 rounded">
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="username">Username</option>
          </select>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map(user => (
            <UserCard
              key={user.id}
              user={user}
              onClick={() => openModal(user)}
            />
          ))}
        </div>
      </div>
      <Modal user={selectedUser} onClose={closeModal} />
    </>
  );
};

export default Dashboard;
