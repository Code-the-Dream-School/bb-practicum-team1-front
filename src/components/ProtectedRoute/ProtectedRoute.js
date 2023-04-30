import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SessionContext /* <-- this is createContet()*/ } from '../../App'

const ProtectedRoute = ({ children, requiredAuthLevel = 'user' }) => {
    // Placeholder to actually check if user is authenticated
    const [userAuthenticated, setUserAuthenticated] = useState(false)
    const sessionCtx = useContext(SessionContext)

    console.log(sessionCtx.sessionObject)

    if (requiredAuthLevel === 'user') {
        if (!userAuthenticated) {
            return <Navigate to="/login" />
        }
        return children
    }

    if (requiredAuthLevel === 'anonymous') {
        if (userAuthenticated) {
            return <Navigate to="/" />
        }
        return children
    }
}

export default ProtectedRoute
