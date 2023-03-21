import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredAuthLevel }) => {
    // Placeholder to actually check if user is authenticated
    const useAuth = () => {
        if (Math.random() > 0.5) {
            return true;
        }
        return false;
    }

    const user = useAuth();

    switch (requiredAuthLevel) {
        case "user":
            break;
        case "anonymous":
            return <Navigate to="/login" />;
        default:
            return <Navigate to="/login" />;
    }

    if (!user) {
        // User is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;