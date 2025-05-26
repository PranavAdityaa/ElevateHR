import React from 'react';
import { FiUsers, FiCalendar, FiDollarSign, FiTrendingUp, FiCheckCircle, FiAlertCircle, FiBarChart2 } from 'react-icons/fi';
import { useStateContext } from '../contexts/ContextProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { currentMode } = useStateContext();

  const stats = [
    {
      title: 'Total Employees',
      value: '1,234',
      change: '+12%',
      icon: <FiUsers className="text-2xl" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Active Projects',
      value: '45',
      change: '+5%',
      icon: <FiCalendar className="text-2xl" />,
      color: 'bg-green-500',
    },
    {
      title: 'Revenue',
      value: '$45.2M',
      change: '+8%',
      icon: <FiDollarSign className="text-2xl" />,
      color: 'bg-purple-500',
    },
    {
      title: 'Growth Rate',
      value: '23%',
      change: '+3%',
      icon: <FiTrendingUp className="text-2xl" />,
      color: 'bg-orange-500',
    },
  ];

  const recentActivities = [
    {
      title: 'New Employee Onboarded',
      description: 'John Doe joined the Development team',
      time: '2 hours ago',
      icon: <FiCheckCircle className="text-green-500" />,
    },
    {
      title: 'Project Deadline',
      description: 'Website Redesign project due in 3 days',
      time: '4 hours ago',
      icon: <FiAlertCircle className="text-orange-500" />,
    },
    {
      title: 'Team Meeting',
      description: 'Monthly review meeting scheduled',
      time: '1 day ago',
      icon: <FiCalendar className="text-blue-500" />,
    },
  ];

  return (
    <div className={`m-2 md:m-10 mt-2 p-2 md:p-4 ${currentMode === 'Dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-3xl`}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-2">
        <div className="flex items-center w-full mb-2">
          <FiBarChart2 className="text-2xl text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold inline-block">Company Statistics</h1>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0 ml-0 md:ml-auto">
          <Link to="/dashboard">
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">Overview</button>
          </Link>
          <Link to="/analytics">
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">Analytics</button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
              currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                <p className="text-green-500 text-sm mt-2">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color} text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className={`p-6 rounded-2xl shadow-lg ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-600">
                {activity.icon}
              </div>
              <div>
                <h4 className="font-medium">{activity.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{activity.description}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
