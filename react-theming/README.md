# React Theme Provider - Documentation 📚✨

Welcome to the **React Theme Provider** documentation! This guide provides a detailed explanation of how to set up and use the `ThemeProvider` in your React project. The `ThemeProvider` is designed to enable light and dark mode themes in your application seamlessly.

Whether you're a beginner or an experienced developer, this documentation will help you integrate and manage themes in your React applications with ease.

---

## **Introduction**

The **Theme Provider** uses React Context to manage light and dark modes globally across your application. It provides a reusable and scalable solution for implementing theming without prop drilling.

### **Features**:
- Toggle between light and dark modes.
- Easily extendable to support multiple themes.
- Global state management with React Context.
- Smooth transitions between themes.

---

## **Getting Started**

### **1. Prerequisites**
Before you begin, ensure you have the following installed:
- Node.js and npm
- A React project (e.g., created with [Vite](https://vitejs.dev/), Create React App, or other tools)

---

### **2. Installation**

To add the Theme Provider to your project:
1. Clone this repository or copy the Theme Provider implementation.
2. Ensure your project is set up to use React Context.

---

### **3. Setting Up the Theme Provider**

#### **1. Create the Theme Context**
Add a `ThemeContext.jsx` file in your `src/context` directory:

```
import React, { createContext, useState, useContext } from 'react';

// Create Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false); // false = light mode, true = dark mode

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use Theme Context
export const useTheme = () => useContext(ThemeContext);
```

#### **2. Wrap Your App with ThemeProvider**
In your `main.jsx` (or index.js), wrap the root App component with the ThemeProvider:

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

### **4. Using the Theme Context**
In Components
To access the theme state and toggle function, use the custom `useTheme` hook:
```
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: theme ? '#222' : '#eee',
        color: theme ? '#fff' : '#000',
        transition: 'all 0.3s ease',
      }}
    >
      <h1>{theme ? 'Dark Mode' : 'Light Mode'}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          backgroundColor: theme ? '#fff' : '#333',
          color: theme ? '#333' : '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
```

## **Adding Custom Themes**
To extend the theme provider with more themes:

 - **1.** Replace the theme state with an object containing theme styles.
 - **2.** Provide custom styles to components using the theme object.

Example:

```
const themes = {
  light: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  dark: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

## **Building Your First Themed App**
Create a sample application that uses the Theme Provider:

 - **1.** Add a ThemeToggle component.
 - **2.** Use the theme values in multiple components (e.g., Navbar, Footer, etc.).

## **Learn More**
Explore these resources to enhance your understanding of React Context and theming:

- [Vite Documentation](https://vitejs.dev/): Official documentation for Vite.
- [React Documentation](https://legacy.reactjs.org/docs/context.html): Official documentation for React Context.

## **Deployment**
Once your app is ready for production:

1. Build your React app using the `npm run build` command.
2. Upload the build files to a web server or use a hosting provider like Netlify, Vercel, or Heroku to deploy your app.
