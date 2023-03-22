import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredAuthLevel }) => {
    // Placeholder to actually check if user is authenticated
    const useAuth = () => {
        if (Math.random() > 0.5) {
            return true;
        }
        return false;
    };

    const userAuthenticated = useAuth();

    if (requiredAuthLevel === "user") {
        if (!userAuthenticated) {
            return <Navigate to="/login" />;
        }
        return children;
    };

    if (requiredAuthLevel === "anonymous") {
        if (!userAuthenticated) {
            return <Navigate to="/login" />;
        }
        return <Navigate to="/" />;
    };
};

export default ProtectedRoute;