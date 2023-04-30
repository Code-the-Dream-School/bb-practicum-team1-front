import React, { useState } from 'react'
import { forLoggedInUser, forSignedOutUser } from '../../constants'
import { Link } from 'react-router-dom'

const RightNav = ({ open }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className='rightNav'>
            <ul className={`${open ? 'openClass' : 'closeClass'}`}>
                {isLoggedIn
                    ? forLoggedInUser.map(function (routeObj) {
                          return (
                              <li key={routeObj.route} className="button-17">
                                  <Link to={routeObj.route}>{routeObj.name}</Link>
                              </li>
                          )
                      })
                    : forSignedOutUser.map(function (routeObj) {
                          return (
                              <li key={routeObj.route} className="button-17">
                                  <Link to={routeObj.route}>{routeObj.name}</Link>
                              </li>
                          )
                      })}
            </ul>
        </div>
    )
}

export default RightNav
