import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { useStateContext } from '../contexts/ContextProvider';
import { areaCustomSeries, barCustomSeries, pieChartData } from '../data/dummy';
import { Link } from 'react-router-dom';
import { FiBarChart2 } from 'react-icons/fi';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE', '#FF6F91'];

const departmentRatings = [
  { department: 'Eng', rating: 4.5 },
  { department: 'Mkt', rating: 4.1 },
  { department: 'Sales', rating: 3.8 },
  { department: 'HR', rating: 4.2 },
  { department: 'Fin', rating: 4.0 },
  { department: 'Ops', rating: 3.9 },
];

const bookmarkTrends = [
  { month: 'Jan', bookmarks: 20 },
  { month: 'Feb', bookmarks: 35 },
  { month: 'Mar', bookmarks: 50 },
  { month: 'Apr', bookmarks: 40 },
  { month: 'May', bookmarks: 60 },
  { month: 'Jun', bookmarks: 80 },
  { month: 'Jul', bookmarks: 70 },
  { month: 'Aug', bookmarks: 90 },
  { month: 'Sep', bookmarks: 100 },
  { month: 'Oct', bookmarks: 110 },
  { month: 'Nov', bookmarks: 120 },
  { month: 'Dec', bookmarks: 130 },
];

// New: Gender Diversity Pie Chart Data
const genderData = [
  { gender: 'Male', value: 60 },
  { gender: 'Female', value: 35 },
  { gender: 'Other', value: 5 },
];

// New: Employee Joinings & Exits Over Time
const joinExitData = [
  { month: 'Jan', joined: 10, exited: 2 },
  { month: 'Feb', joined: 12, exited: 3 },
  { month: 'Mar', joined: 8, exited: 1 },
  { month: 'Apr', joined: 15, exited: 4 },
  { month: 'May', joined: 9, exited: 2 },
  { month: 'Jun', joined: 11, exited: 3 },
  { month: 'Jul', joined: 13, exited: 2 },
  { month: 'Aug', joined: 14, exited: 5 },
  { month: 'Sep', joined: 10, exited: 1 },
  { month: 'Oct', joined: 12, exited: 2 },
  { month: 'Nov', joined: 9, exited: 3 },
  { month: 'Dec', joined: 11, exited: 2 },
];

const monthShort = val => {
  const d = new Date(val);
  return d.toLocaleString('default', { month: 'short' });
};

const Analytics = () => {
  const { currentMode } = useStateContext();
  return (
    <div className={`m-2 md:m-10 mt-8 p-2 md:p-10 ${currentMode === 'Dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-3xl`}>
      {/* Title and Navigation */}
      <div className="flex items-center w-full mb-2">
        <FiBarChart2 className="text-2xl text-blue-500 mr-2" />
        <h1 className="text-2xl font-bold inline-block">Analytics</h1>
      </div>
      <div className="flex gap-2 mb-4 justify-end">
        <Link to="/dashboard">
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">Overview</button>
        </Link>
        <Link to="/analytics">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">Analytics</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Employee Growth (Area Chart) */}
        <div className={`p-6 rounded-2xl shadow-lg ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-semibold mb-4">Employee Growth</h3>
          <div className="h-[28rem]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={areaCustomSeries[0].dataSource}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" tickFormatter={monthShort} />
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
        {/* Department Distribution (Bar Chart) */}
        <div className={`p-6 rounded-2xl shadow-lg ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-semibold mb-4">Department Distribution</h3>
          <div className="h-[28rem]">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Department-wise Average Ratings (Bar Chart) */}
        <div className={`p-6 rounded-2xl shadow-lg ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-semibold mb-4">Department-wise Average Ratings</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentRatings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="rating" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Bookmark Trends (Area Chart) */}
        <div className={`p-6 rounded-2xl shadow-lg ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-semibold mb-4">Bookmark Trends</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={bookmarkTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="bookmarks" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 mb-12">
        {/* Employee Joinings & Exits Over Time (Line Chart) */}
        <div className={`p-6 rounded-2xl shadow-lg ${currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-xl font-semibold mb-4">Employee Joinings & Exits Over Time</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={joinExitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="joined" stroke="#4F8A8B" name="Joined" />
                <Line type="monotone" dataKey="exited" stroke="#FF6F91" name="Exited" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 