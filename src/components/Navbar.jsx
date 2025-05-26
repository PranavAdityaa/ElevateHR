import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { FiMenu, FiBell, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { chatData, userProfileData } from '../data/dummy';

const Navbar = ({ handleLogout }) => {
  const { setActiveMenu, currentColor, currentMode, activeMenu } = useStateContext();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsProfileOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationOpen(false);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.notification-dropdown') && !e.target.closest('.profile-dropdown')) {
      setIsNotificationOpen(false);
      setIsProfileOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white"
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative notification-dropdown">
          <TooltipComponent content="Notifications" position="BottomCenter">
            <button
              type="button"
              onClick={handleNotificationClick}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white"
            >
              <FiBell className="text-2xl" />
            </button>
          </TooltipComponent>

          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Notifications</h3>
                  <button
                    onClick={() => setIsNotificationOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ×
                  </button>
                </div>
                {chatData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <div
                      className="p-2 rounded-full"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">{item.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          </div>

        <div className="relative profile-dropdown">
          <TooltipComponent content="Profile" position="BottomCenter">
            <button
              type="button"
              onClick={handleProfileClick}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white"
            >
              <FiUser className="text-2xl" />
            </button>
        </TooltipComponent>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">User Profile</h3>
                  <button
                    onClick={() => setIsProfileOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ×
                  </button>
                </div>
                {userProfileData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                    onClick={() => {
                       setIsProfileOpen(false);
                       if (item.action === 'logout') {
                         handleLogout();
                       }
                    }}
                  >
                    <div
                      className="p-2 rounded-full"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">{item.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
