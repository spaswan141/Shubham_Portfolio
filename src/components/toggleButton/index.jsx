import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './index.css';

const ToggleButton = ({toggleTheme}) => {
  const [isNightMode, setIsNightMode] = useState(false);
  return (
    <div className={`toggle-button ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={toggleTheme}>
      {isNightMode ? <FaMoon /> : <FaSun />}
    </div>
  );
};

export default ToggleButton;
