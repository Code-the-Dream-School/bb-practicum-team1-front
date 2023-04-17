import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const RootLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout
