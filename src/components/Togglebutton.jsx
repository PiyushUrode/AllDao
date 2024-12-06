import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
const Togglebutton = () => {
    const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`relative flex items-center border border-xl border-green-600 rounded-3xl justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <input
        type="checkbox"
        id="darkmode-toggle"
        className="hidden"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        onClick={toggleTheme}
      />
      <label
        htmlFor="darkmode-toggle"
        className={`relative block w-[60px] h-[30px] rounded-full cursor-pointer transition-all duration-300 
          ${isDarkMode ? 'bg-gray-800 shadow-inner-dark' : 'bg-gray-200 shadow-inner-light'}`}
      >
        <div
          className={`absolute w-[26px] h-[26px] top-[2px] rounded-full transition-all duration-300
            ${isDarkMode ? 'left-[32px] bg-gradient-to-b from-gray-500 to-gray-800 shadow-dark' : 'left-[2px] bg-gradient-to-b from-yellow-300 to-yellow-600 shadow-light'}`}
        ></div>
        <svg
          version="1.1"
          className={`absolute w-[18px] top-[6px] z-10 transition-all duration-300 
            ${isDarkMode ? 'left-[42px] fill-white' : 'left-[6px] fill-gray-400'}`}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 496 496"
        >
          {/* SVG content for sun */}
        </svg>
        <svg
          version="1.1"
          className={`absolute w-[18px] top-[6px] z-10 transition-all duration-300 
            ${isDarkMode ? 'left-[6px] fill-gray-400' : 'left-[42px] fill-white'}`}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 49.739 49.739"
        >
          {/* SVG content for moon */}
        </svg>
      </label>
    </div>
  );
};

export default Togglebutton;