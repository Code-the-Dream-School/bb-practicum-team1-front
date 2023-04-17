import React, { useState } from 'react'
import logo from './logo.png'
import RightNav from './RightNav'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="nav">
            <div className="nav-container">
                <div className="logo-pic">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar">
                    <div></div>
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
