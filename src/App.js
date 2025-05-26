import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Calendar, Employees, Customers, Kanban, Projects, Dashboard } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Analytics from './pages/Analytics';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {!isAuthenticated ? (
            <Routes>
              <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
              <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          ) : (
            <>
              <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: '50%' }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
              
              <div
                className={
                  activeMenu
                    ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full'
                    : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
                }
              >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                  <Navbar handleLogout={handleLogout} />
                </div>
                
                <div className="mt-16 p-4">
                  {themeSettings && <ThemeSettings />}
                  
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/login" element={<Navigate to="/dashboard" />} />
                    <Route path="/signup" element={<Navigate to="/dashboard" />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                  </Routes>
                </div>
                
                <Footer />
              </div>
            </>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
