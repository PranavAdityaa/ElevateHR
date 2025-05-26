import React from 'react';
import { FiEye, FiBookmark, FiStar, FiTrash2 } from 'react-icons/fi'; // Using react-icons for simplicity
import { useStateContext } from '../contexts/ContextProvider';

const UserCard = ({ user, onDelete }) => {
  const { currentMode } = useStateContext();

  // Simple rating display (e.g., filled stars)
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FiStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FiStar key={i} className="text-gray-400 dark:text-gray-600" />);
      }
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${currentMode === 'Dark' ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="flex items-center gap-4 mb-4">
        {/* Assuming user data might include an image */}
        {user.image && (
           <img
             className="rounded-full w-12 h-12 object-cover"
             src={user.image}
             alt={`${user.firstName} ${user.lastName}`}
           />
         )}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{user.firstName} {user.lastName}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">Age: {user.age}</p>
      {/* Using mocked department */}
      <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">Department: {user.department}</p>

      <div className="mb-4">
        <p className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-1">Performance Rating:</p>
        {renderRating(user.rating)} {/* Using mocked rating */}
      </div>

      <div className="flex justify-between items-center">
        <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 text-sm">
          <FiEye /> View
        </button>
        <button className="flex items-center gap-1 text-purple-500 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-600 text-sm">
          <FiBookmark /> Bookmark
        </button>
        <button className="flex items-center gap-1 text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600 text-sm">
          Promote
        </button>
        <button
          className="flex items-center gap-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 text-sm"
          onClick={() => onDelete(user.id)}
        >
          <FiTrash2 /> Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard; 