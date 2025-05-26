import React, { useState } from 'react';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees, onViewEmployee, onBookmarkEmployee, onPromoteEmployee }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const departments = ['all', ...new Set(employees.map(emp => emp.department))];
  const ratings = ['all', '5', '4', '3', '2', '1'];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = departmentFilter === 'all' || employee.department === departmentFilter;
    const matchesRating = ratingFilter === 'all' || employee.rating === parseInt(ratingFilter);
    
    return matchesSearch && matchesDepartment && matchesRating;
  });

  return (
    <div className="p-6">
      {/* Search and Filter Bar */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <FiFilter className="mr-2" />
            Filters
            <FiChevronDown className={`ml-2 transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept.charAt(0).toUpperCase() + dept.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {ratings.map(rating => (
                    <option key={rating} value={rating}>
                      {rating === 'all' ? 'All Ratings' : `${rating} Stars`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {filteredEmployees.length} of {employees.length} employees
        </p>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onView={() => onViewEmployee(employee)}
            onBookmark={() => onBookmarkEmployee(employee)}
            onPromote={() => onPromoteEmployee(employee)}
          />
        ))}
      </div>

      {/* No Results Message */}
      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No employees found matching your search criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployeeList; 