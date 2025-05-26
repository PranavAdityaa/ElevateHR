import React, { useState } from 'react';
import { FiStar, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const EmployeeDetail = ({ employee }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FiStar
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FiMail className="text-gray-400" />
                  <span>{employee.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="text-gray-400" />
                  <span>{employee.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-gray-400" />
                  <span>{employee.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Bio</h3>
              <p className="text-gray-600 dark:text-gray-300">{employee.bio}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Performance History</h3>
              <div className="space-y-4">
                {employee.performanceHistory.map((record, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{record.date}</span>
                      <div className="flex items-center">
                        {renderStars(record.rating)}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{record.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Current Projects</h3>
            <div className="space-y-4">
              {employee.projects.map(project => (
                <div key={project.id} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{project.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Role: {project.role}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'feedback':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recent Feedback</h3>
            <div className="space-y-4">
              {employee.performanceHistory.map((record, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{record.date}</span>
                    <div className="flex items-center">
                      {renderStars(record.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{record.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Employee Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
        <div className="flex items-center space-x-6">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{employee.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{employee.department}</p>
            <div className="flex items-center mt-2">
              {renderStars(employee.rating)}
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                ({employee.rating}/5)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {['overview', 'projects', 'feedback'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default EmployeeDetail; 