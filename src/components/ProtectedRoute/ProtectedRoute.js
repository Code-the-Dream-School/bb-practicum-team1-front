import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ requiredAuthLevel = 'user' }) => {
    // Placeholder to actually check if user is authenticated
    // const [userAuthenticated, setUserAuthenticated] = useState(false)
    // console.log(!sessionObject)

    if (requiredAuthLevel === 'anonymous') return <Navigate to="/" />
    // if (!sessionObject) return <Navigate to="/login" />

    return <Outlet />

    //     if (requiredAuthLevel === 'user') {
    //         if (!userAuthenticated) {
    //             return <Navigate to="/login" />
    //         }

    //         return <Outlet />
    //     }

    //     if (requiredAuthLevel === 'anonymous') {
    //         return <Navigate to="/" />
    //     }
}

export default ProtectedRoute
