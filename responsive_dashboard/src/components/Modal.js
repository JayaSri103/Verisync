import React from 'react';

const Modal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p>Address: {user.address.street}, {user.address.city}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <button onClick={onClose} className="mt-4 text-red-500">Close</button>
      </div>
    </div>
  );
};

export default Modal;
