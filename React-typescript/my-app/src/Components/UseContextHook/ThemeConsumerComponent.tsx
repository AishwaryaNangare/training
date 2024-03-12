import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeConsumerComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default ThemeConsumerComponent;
