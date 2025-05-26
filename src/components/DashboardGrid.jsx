import React from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FiUsers, FiAward, FiStar, FiTrendingUp } from 'react-icons/fi';
import { RiTeamLine } from 'react-icons/ri';
import { useStateContext } from '../contexts/ContextProvider';

const DashboardGrid = () => {
  const { currentMode } = useStateContext();
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const dashboardCards = [
    {
      title: 'Total Employees',
      value: '156',
      icon: <FiUsers className="w-6 h-6" />,
      color: '#03C9D7',
      iconBg: '#E5FAFB',
    },
    {
      title: 'Top Performers',
      value: '23',
      icon: <FiAward className="w-6 h-6" />,
      color: '#FF5733',
      iconBg: '#FFE5E0',
    },
    {
      title: 'Average Rating',
      value: '4.2',
      icon: <FiStar className="w-6 h-6" />,
      color: '#FFBB28',
      iconBg: '#FFF8E1',
    },
    {
      title: 'Active Projects',
      value: '12',
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: '#00C49F',
      iconBg: '#E5FAFB',
    },
  ];

  const performanceTrendData = [
    { x: 'Jan', y: 65 },
    { x: 'Feb', y: 70 },
    { x: 'Mar', y: 75 },
    { x: 'Apr', y: 72 },
    { x: 'May', y: 80 },
    { x: 'Jun', y: 85 },
  ];

  const departmentPerformanceData = [
    { x: 'Engineering', y: 85 },
    { x: 'Marketing', y: 75 },
    { x: 'Sales', y: 90 },
    { x: 'HR', y: 80 },
  ];

  const departmentData = [
    { name: 'Engineering', value: 35 },
    { name: 'Marketing', value: 20 },
    { name: 'Sales', value: 25 },
    { name: 'HR', value: 20 },
  ];

  return (
    <div className={`p-4 ${currentMode === 'Dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl`}>
      {/* Dashboard Cards */}
      // Removed dashboard cards as requested

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-8 mb-8">
        {/* Performance Trend Chart */}
        <div className={`${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 shadow-md`}>
          <div className="flex items-center justify-between mb-8">
            <h3 className={`text-2xl font-semibold ${currentMode === 'Dark' ? 'text-white' : 'text-gray-900'}`}>Performance Trend</h3>
            <div className="flex items-center gap-2">
              <FiTrendingUp className="text-blue-500 w-6 h-6" />
              <span className="text-lg text-gray-500">Last 6 months</span>
            </div>
          </div>
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceTrendData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={currentMode === 'Dark' ? '#4B5563' : '#E5E7EB'} />
                <XAxis 
                  dataKey="x" 
                  stroke={currentMode === 'Dark' ? '#9CA3AF' : '#374151'}
                  tick={{ fontSize: 14 }}
                />
                <YAxis 
                  stroke={currentMode === 'Dark' ? '#9CA3AF' : '#374151'}
                  tick={{ fontSize: 14 }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: currentMode === 'Dark' ? '#1F2937' : '#FFFFFF', 
                    border: 'none',
                    fontSize: '14px'
                  }} 
                />
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Performance Chart */}
        <div className={`${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 shadow-md`}>
          <div className="flex items-center justify-between mb-8">
            <h3 className={`text-2xl font-semibold ${currentMode === 'Dark' ? 'text-white' : 'text-gray-900'}`}>Department Performance</h3>
            <div className="flex items-center gap-2">
              <FiUsers className="text-green-500 w-6 h-6" />
              <span className="text-lg text-gray-500">By Department</span>
            </div>
          </div>
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={departmentPerformanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={currentMode === 'Dark' ? '#4B5563' : '#E5E7EB'} />
                <XAxis 
                  dataKey="x" 
                  stroke={currentMode === 'Dark' ? '#9CA3AF' : '#374151'}
                  tick={{ fontSize: 14 }}
                />
                <YAxis 
                  stroke={currentMode === 'Dark' ? '#9CA3AF' : '#374151'}
                  tick={{ fontSize: 14 }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: currentMode === 'Dark' ? '#1F2937' : '#FFFFFF', 
                    border: 'none',
                    fontSize: '14px'
                  }} 
                />
                <Bar dataKey="y" fill="#82ca9d" barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Department Distribution */}
          <div className={`${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 shadow-md`}>
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-2xl font-semibold ${currentMode === 'Dark' ? 'text-white' : 'text-gray-900'}`}>Department Distribution</h3>
              <div className="flex items-center gap-2">
                <RiTeamLine className="text-purple-500 w-6 h-6" />
                <span className="text-lg text-gray-500">Employee Count</span>
              </div>
            </div>
            <div className="h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: currentMode === 'Dark' ? '#1F2937' : '#FFFFFF', 
                      border: 'none',
                      fontSize: '14px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className={`${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 shadow-md`}>
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-2xl font-semibold ${currentMode === 'Dark' ? 'text-white' : 'text-gray-900'}`}>Performance Metrics</h3>
              <div className="flex items-center gap-2">
                <FiStar className="text-yellow-500 w-6 h-6" />
                <span className="text-lg text-gray-500">Rating Distribution</span>
              </div>
            </div>
            <div className="h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { name: '5 Stars', value: 45 },
                    { name: '4 Stars', value: 80 },
                    { name: '3 Stars', value: 60 },
                    { name: '2 Stars', value: 20 },
                    { name: '1 Star', value: 5 },
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={currentMode === 'Dark' ? '#4B5563' : '#E5E7EB'} />
                  <XAxis 
                    dataKey="name" 
                    stroke={currentMode === 'Dark' ? '#9CA3AF' : '#374151'}
                    tick={{ fontSize: 14 }}
                  />
                  <YAxis 
                    stroke={currentMode === 'Dark' ? '#9CA3AF' : '#374151'}
                    tick={{ fontSize: 14 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: currentMode === 'Dark' ? '#1F2937' : '#FFFFFF', 
                      border: 'none',
                      fontSize: '14px'
                    }} 
                  />
                  <Bar dataKey="value" fill="#8884d8" barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid; 