import React, { useContext, useState } from 'react'
import logo from './logo-green.png'
import LogoNight from './logo-night.png'
import lamp from './Lamp n.svg'
import lampDay from './Lamp day.svg'
import { Link, useNavigate } from 'react-router-dom'
import { forLoggedInUser, forSignedOutUser } from '../../constants'
import { SessionContext /* <-- this is createContet()*/ } from '../../App'
import { logoutAdapter } from '../../adapters/auth-adapters'
// Header should always display even when scrolling and should be visible on every page.

const logOut = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>

const Header = ({ night, setNight, openRigthNav, setIsOpenRightNav }) => {
    const { sessionObject, setSessionObject } = useContext(SessionContext);
    const navigate = useNavigate();
    const [checkbox, checkCheckbox] = useState(false);
    const hide = () => setIsOpenRightNav(false);
    const show = () => setIsOpenRightNav(true);

    return (
        <div className={night ? 'nav' : 'night-mode-header'}>
         
                <div className="logo-pic">
                    <Link to="/">
                        {night ? <img src={LogoNight} alt="logo" title='Go to Main Page' /> : <img src={logo} alt="logo" title='Go to Main Page' />}
                    </Link>
                </div>
                <button
                    type="button"
                    title={night ? 'Turn on the light' : 'Turn off the light'}
                    onClick={() => setNight(!night)}
                    className={night ? 'day-mode' : 'night-mode'}
                >
                    {night ? (<img src={lampDay} alt="lamp" />) : (<img src={lamp} alt="lamp" />)}
                </button>

                <label className='hamburger-menu'>
                    <input 
                        type='checkbox' 
                        id='hamburger-checkbox' 
                        name='hamburger-checkbox' 
                        checked={checkbox} 
                        onChange={() => {checkCheckbox(!checkbox)}}
                        className={`hamburger ${openRigthNav ? 'menu' : 'hamburger'}`}
                    />
                </label>
                <aside className='sidebar'>
                    <ul className='right-nav-ul'>
                        <div className='buttons'>
                            {sessionObject
                                ? forLoggedInUser.map(function (routeObj) {
                                    return (
                                        <Link key={routeObj.route} to={routeObj.route} className="button-17" onBlur={hide} onFocus={show}>
                                            {routeObj.name}
                                        </Link>
                                    )
                                })
                                : forSignedOutUser.map(function (routeObj) {
                                    return (
                                        <Link to={routeObj.route} key={routeObj.route} className="button-17" onBlur={hide} onFocus={show}>
                                            {routeObj.name}
                                        </Link>
                                    )
                                })}
                            {sessionObject && (
                                <div className='log-out-button' title='Log Out'>
                                    <button
                                        className="button-17"
                                        onClick={() => {
                                            logoutAdapter()
                                            setSessionObject(null)
                                            checkCheckbox(false)
                                            navigate('/login');
                                        }}
                                    >
                                        {logOut}
                                    </button>
                                </div>
                            )}
                        </div>
                    </ul>
            </aside>
        </div>
    )
}

export default Header
