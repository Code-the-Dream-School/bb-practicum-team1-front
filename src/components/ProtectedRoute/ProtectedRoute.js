import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredAuthLevel = 'user' }) => {
    // Placeholder to actually check if user is authenticated
    const [userAuthenticated, setUserAuthenticated] = useState(false);

    if (requiredAuthLevel === "user") {
        if (!userAuthenticated) {
            return <Navigate to="/login" />;
        }
        return children;
    };

    if (requiredAuthLevel === "anonymous") {
        if (userAuthenticated) {
            return <Navigate to="/login" />;
        }
        return <Navigate to="/" />;
    };
};

export default ProtectedRoute;