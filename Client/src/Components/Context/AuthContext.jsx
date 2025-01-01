// AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock function to simulate login
  const login = () => {
    setIsLoggedIn(true);
    // Optionally, save to local storage or session storage
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  // Check authentication status on initial render
  useEffect(() => {
    const storedStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedStatus);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
