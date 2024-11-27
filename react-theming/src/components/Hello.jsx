import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Hello() {
  const { theme } = useTheme();

  const themeStyles = {
    backgroundColor: theme ? '#333' : '#fff',
    color: theme ? '#fff' : '#000',
    border: `2px solid ${theme ? '#fff' : '#000'}`,
    borderRadius: '10px',
    textAlign: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: '50px auto',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={themeStyles}>
      <h1>This is a component</h1>
    </div>
  );
}

export default Hello;
