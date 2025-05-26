import React from 'react';
import { FiStar, FiBookmark, FiArrowUp } from 'react-icons/fi';

const EmployeeCard = ({ employee, onView, onBookmark, onPromote }) => {
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FiStar
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img
          src={employee.avatar}
          alt={employee.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{employee.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{employee.email}</p>
          <div className="flex items-center mt-1">
            {renderStars(employee.rating)}
          </div>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Department</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">{employee.department}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Position</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">{employee.position}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={() => onView(employee.id)}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          View
        </button>
        <button
          onClick={() => onBookmark(employee.id)}
          className="p-1 text-gray-600 hover:text-yellow-500 transition-colors"
        >
          <FiBookmark className="w-5 h-5" />
        </button>
        <button
          onClick={() => onPromote(employee.id)}
          className="p-1 text-gray-600 hover:text-green-500 transition-colors"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard; 