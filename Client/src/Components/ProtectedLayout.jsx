// Components/ProtectedLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const ProtectedLayout = () => {
    return (
        <ProtectedRoute>
            <Outlet /> {/* Renders nested routes under ProtectedLayout */}
        </ProtectedRoute>
    );
};

export default ProtectedLayout;
