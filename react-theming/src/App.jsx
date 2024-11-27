import React from 'react';
import { useTheme } from './context/ThemeContext';
import Hello from './components/Hello';

function App() {
  const { theme, toggleTheme } = useTheme();

  const appStyles = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: theme ? '#222' : '#eee',
    color: theme ? '#fff' : '#000',
    minHeight: '100vh',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={appStyles}>
      <h1>React App with Theme Context</h1>
      <button onClick={toggleTheme}>
        Switch to {theme ? 'Light' : 'Dark'} Mode
      </button>
      <Hello />
    </div>
  );
}

export default App;
