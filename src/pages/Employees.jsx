import React, { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';
import UserCard from '../components/UserCard';
import { FiPlus, FiX, FiUser, FiMail, FiPhone, FiBriefcase, FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../data/avatar.jpg';
import avatar2 from '../data/avatar2.jpg';
import avatar3 from '../data/avatar3.png';
import avatar4 from '../data/avatar4.jpg';

const Employees = () => {
  const { currentMode, activeMenu } = useStateContext();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: 'Engineering',
    rating: 3,
  });
  const [formErrors, setFormErrors] = useState({});

  const avatars = [avatar, avatar2, avatar3, avatar4];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users?limit=20');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const processedUsers = data.users.map(user => ({
          ...user,
          image: avatars[Math.floor(Math.random() * avatars.length)],
          department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'][Math.floor(Math.random() * 6)],
          rating: Math.floor(Math.random() * 5) + 1
        }));
        setUsers(processedUsers);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    const matchesSearch = searchQuery === '' ||
                          user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment = selectedDepartment === '' || user.department === selectedDepartment;

    const matchesRating = selectedRating === '' || user.rating === parseInt(selectedRating);

    return matchesSearch && matchesDepartment && matchesRating;
  });

  const validateForm = () => {
    const errors = {};
    if (!newEmployee.firstName.trim()) errors.firstName = 'First name is required';
    if (!newEmployee.lastName.trim()) errors.lastName = 'Last name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmployee.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!newEmployee.phone.trim()) errors.phone = 'Phone number is required';
    if (!newEmployee.department) errors.department = 'Please select a department';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value, 10) : value
    }));
  };

  const handleAddEmployee = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    // Generate a new unique ID (in a real app, this would come from the backend)
    const newId = Math.max(0, ...users.map(u => u.id)) + 1;
    
    // Select a random avatar
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    
    // Create new employee object
    const employeeToAdd = {
      id: newId,
      ...newEmployee,
      username: `${newEmployee.firstName.toLowerCase()}.${newEmployee.lastName.toLowerCase()}`,
      image: randomAvatar,
    };
    
    // Add to the users array
    setUsers([employeeToAdd, ...users]);
    
    // Reset form and close modal
    setNewEmployee({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: 'Engineering',
      rating: 3,
    });
    setFormErrors({});
    setIsModalOpen(false);
    
    // Show success message
    toast.success('Employee added successfully!');
  };

  const handleDeleteUser = (userId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");
    if (isConfirmed) {
      setUsers(users.filter(user => user.id !== userId));
      console.log(`Employee with ID ${userId} deleted.`);
      // In a real application, you would also make an API call to delete the user from the backend
    }
  };

  return (
    <div className={`m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-gray-900 rounded-3xl transition-all duration-300 ${!activeMenu ? 'ml-0' : 'ml-64'}`}>
      <Header title="Employees" />

      <div className="flex flex-col gap-8">
        <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl w-full ${
          currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Filter Employees</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by name, email, or department..."
              className={`p-3 rounded-md w-full md:w-1/2 ${
                currentMode === 'Dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
              } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
              className={`p-3 rounded-md w-full md:w-1/4 ${
                currentMode === 'Dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
              } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Operations">Operations</option>
            </select>

            <select
              className={`p-3 rounded-md w-full md:w-1/4 ${
                currentMode === 'Dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
              } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
            >
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mb-6">
          <button
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
            onClick={handleAddEmployee}
          >
            <FiPlus />
            Add Employee
          </button>
        </div>

        <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl w-full ${
          currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Employee List</h3>
          {loading && <p className="text-gray-600 dark:text-gray-300">Loading users...</p>}
          {error && <p className="text-red-500">Error fetching users: {error.message}</p>}
          {!loading && !error && filteredUsers.length === 0 && (
            <p className="text-gray-600 dark:text-gray-300">No employees found matching your criteria.</p>
          )}
          {!loading && !error && filteredUsers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUsers.map(user => (
                <UserCard key={user.id} user={user} onDelete={handleDeleteUser} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Employee Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`relative w-full max-w-md p-6 rounded-2xl shadow-xl ${
            currentMode === 'Dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FiX size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Add New Employee</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={newEmployee.firstName}
                    onChange={handleInputChange}
                    className={`pl-10 w-full p-2 border rounded-md ${
                      formErrors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } ${currentMode === 'Dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}
                    placeholder="John"
                  />
                </div>
                {formErrors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={newEmployee.lastName}
                    onChange={handleInputChange}
                    className={`pl-10 w-full p-2 border rounded-md ${
                      formErrors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } ${currentMode === 'Dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}
                    placeholder="Doe"
                  />
                </div>
                {formErrors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                    className={`pl-10 w-full p-2 border rounded-md ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } ${currentMode === 'Dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}
                    placeholder="john.doe@example.com"
                  />
                </div>
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={newEmployee.phone}
                    onChange={handleInputChange}
                    className={`pl-10 w-full p-2 border rounded-md ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } ${currentMode === 'Dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                {formErrors.phone && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Department <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiBriefcase className="text-gray-400" />
                  </div>
                  <select
                    name="department"
                    value={newEmployee.department}
                    onChange={handleInputChange}
                    className={`pl-10 w-full p-2 border rounded-md ${
                      formErrors.department ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } ${currentMode === 'Dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Rating
                </label>
                <div className="flex items-center">
                  <FiStar className="text-yellow-400 mr-1" />
                  <input
                    type="range"
                    name="rating"
                    min="1"
                    max="5"
                    value={newEmployee.rating}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300 w-6 text-center">
                    {newEmployee.rating}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
