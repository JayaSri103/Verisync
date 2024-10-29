import React from 'react';

const UserCard = ({ user, onClick }) => {
  return (
    <div className="card border rounded p-4 hover:shadow-lg">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.username}</p>
      <button
        className="view-details-btn text-blue-500 hover:underline"
        onClick={onClick}
      >
        View Details
      </button>
    </div>
  );
};

export default UserCard;
