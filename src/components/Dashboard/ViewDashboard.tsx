import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { sessionContext } from '../../context/session-provider'

const ViewDashboard = () => {
    const navigate = useNavigate()
    const { sessionObject } = useContext(sessionContext)

    useEffect(() => {
        if (!sessionObject) {
            navigate('/login')
        }
    }, [sessionObject])

    return <div>ViewDashboard</div>
}

export default ViewDashboard
