import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SessionContext /* <-- this is createContet()*/ } from '../../App'

const ProtectedRoute = ({ children, requiredAuthLevel = 'user' }) => {
    // Placeholder to actually check if user is authenticated
    const [userAuthenticated, setUserAuthenticated] = useState(false)
    const { sessionObject } = useContext(SessionContext)
    console.log('log', sessionObject)
    if (requiredAuthLevel === 'user') {
        if (!sessionObject) {
            return <Navigate to="/login" />
        }
        return children
    }

    if (requiredAuthLevel === 'anonymous') {
        if (sessionObject) {
            return <Navigate to="/" />
        }
        return children
    }
}

export default ProtectedRoute
