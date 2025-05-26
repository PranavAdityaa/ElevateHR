import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { useStateContext } from '../contexts/ContextProvider';

const Signup = ({ onSignupSuccess }) => {
  const { currentMode } = useStateContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    // If validation passes, call the success handler or navigate
    if (onSignupSuccess) {
      onSignupSuccess();
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <div className={`absolute inset-0 -z-10 ${currentMode === 'Dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-gray-100'}`}></div>
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl ${currentMode === 'Dark' ? 'bg-gray-800/90 backdrop-blur-sm text-gray-200' : 'bg-white/90 backdrop-blur-sm text-gray-800'}`}>
        {/* Branding */}
        <div className="flex flex-col items-center mb-8 space-y-2">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-2">
            <SiShopware className="text-blue-600 dark:text-blue-400 text-3xl" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            ElevateHR
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Create your account to get started</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 rounded-md">
            {error}
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <button
            type="submit"
            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform ${!formData.name || !formData.email || !formData.password || !formData.confirmPassword ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
            disabled={!formData.name || !formData.email || !formData.password || !formData.confirmPassword}
          >
            Sign Up
          </button>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Already have an account?
              </span>
            </div>
          </div>
          <div className="mt-6">
            <Link 
              to="/" 
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Sign in to your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;