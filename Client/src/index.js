import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Components/Context/ShopContext';
import { AuthProvider } from './Components/Context/AuthContext'; // Import the AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider> {/* Wrap AuthProvider around the ShopContextProvider */}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </AuthProvider>
);

reportWebVitals();
