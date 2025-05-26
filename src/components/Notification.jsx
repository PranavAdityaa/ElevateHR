import React from 'react';
import { FiX, FiCheck, FiAlertCircle, FiInfo } from 'react-icons/fi';

const Notification = ({ message, type = 'info', onClose }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheck className="w-5 h-5 text-green-400" />;
      case 'error':
        return <FiAlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <FiAlertCircle className="w-5 h-5 text-yellow-400" />;
      default:
        return <FiInfo className="w-5 h-5 text-blue-400" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-md w-full ${getBackgroundColor()} rounded-lg shadow-lg border p-4`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">
            {message}
          </p>
      </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={onClose}
            className="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
