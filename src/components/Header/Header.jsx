import React, { useState } from 'react'
import logo1 from './logo1.png'
import RightNav from './RightNav'
import { Link } from 'react-router-dom'

// Header should always display even when scrolling and should be visible on every page.

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="nav">
            <div className="nav-container">
                <div className="logo-pic">
                    <Link to="/">
                        <img src={logo1} alt="logo" />
                    </Link>
                </div>
                <div className="navbar">
                    <div
                        className="menu-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div
                            className={isOpen ? 'hamBox hamBoxOpen' : 'hamBox'}
                        >
                            <span
                                className={isOpen ? 'lineTop spin' : 'lineTop'}
                            ></span>
                            <span
                                className={
                                    isOpen ? 'lineBottom spin' : 'lineBottom'
                                }
                            ></span>
                        </div>
                        <RightNav open={isOpen} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
