import React from 'react';

const Header = ({ category, title }) => (
  <div className="header-container animate-fade-in">
    {category && category !== 'App' && (
      <p className="text-lg text-gray-400 dark:text-gray-400 font-medium tracking-wide">
        {category}
      </p>
    )}
    <p className="header-title">
      {title}
    </p>
  </div>
);

export default Header;
