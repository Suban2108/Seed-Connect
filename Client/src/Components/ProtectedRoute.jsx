// Components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        // If the user is not authenticated, redirect to the login page
        return <Navigate to="/login" />;
    }

    // If the user is authenticated, render the protected component
    return children;
};

export default ProtectedRoute;
