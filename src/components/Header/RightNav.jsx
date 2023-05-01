import React, { useState, useContext } from 'react'
import { forLoggedInUser, forSignedOutUser } from '../../constants'
import { Link } from 'react-router-dom'
import { SessionContext /* <-- this is createContet()*/ } from '../../App'
import { logoutAdapter } from '../../adapters/auth-adapters'

const RightNav = ({ open }) => {
    const { sessionObject, setSessionObject } = useContext(SessionContext)

    return (
        <div className="rightNav">
            <ul className={`${open ? 'openClass' : 'closeClass'}`}>
                {sessionObject
                    ? forLoggedInUser.map(function (routeObj) {
                          return (
                              <li key={routeObj.route} className="button-17">
                                  <Link to={routeObj.route}>
                                      {routeObj.name}
                                  </Link>
                              </li>
                          )
                      })
                    : forSignedOutUser.map(function (routeObj) {
                          return (
                              <li key={routeObj.route} className="button-17">
                                  <Link to={routeObj.route}>
                                      {routeObj.name}
                                  </Link>
                              </li>
                          )
                      })}
                {sessionObject && (
                    <div className="logOut-button-17">
                        <button
                            className="button-17"
                            onClick={() => {
                                logoutAdapter()
                                setSessionObject(null)
                            }}
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default RightNav
