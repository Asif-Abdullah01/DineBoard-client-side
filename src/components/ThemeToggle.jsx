// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className="p-2 bg-purple-500 font-bold"
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌞' : '🌜'}
    </button>
  );
};

export default ThemeToggle;
