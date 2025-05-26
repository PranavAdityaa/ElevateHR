import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { FiUsers, FiCalendar, FiDollarSign, FiTrendingUp, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { employeesData, areaCustomSeries, barCustomSeries, pieChartData } from '../data/dummy';

const ElevateHR = () => {
  const { currentMode } = useStateContext();
  const [activeTab, setActiveTab] = useState('overview');

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

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className={`m-2 md:m-10 mt-24 p-2 md:p-10 ${currentMode === 'Dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-3xl`}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">ElevateHR Dashboard</h1>
        <div className="flex gap-2 mt-4 md:mt-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'overview'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'analytics'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Analytics
          </button>
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Area Chart */}
        <div className={`p-6 rounded-2xl shadow-lg ${
          currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-xl font-semibold mb-4">Employee Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={areaCustomSeries[0].dataSource}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className={`p-6 rounded-2xl shadow-lg ${
          currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-xl font-semibold mb-4">Department Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barCustomSeries[0].dataSource}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="y" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pie Chart and Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className={`p-6 rounded-2xl shadow-lg ${
          currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-xl font-semibold mb-4">Employee Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="y"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activities */}
        <div className={`p-6 rounded-2xl shadow-lg ${
          currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                  {activity.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{activity.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevateHR; 