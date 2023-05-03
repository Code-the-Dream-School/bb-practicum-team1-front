import React, { useState, createContext } from 'react'

// 3rd-party dependencies
import { Routes, Route } from 'react-router-dom'

// utility functions
import {
    getCookie,
    cookieName,
} from './util/Authentication'


// Page components
import HomePage from './components/HomePage/HomePage'
import { Login } from './components/LoginPage/LoginPage'
import { SignUp } from './components/SignupPage/SignUp'
import CreateBook from './components/CreateBook/CreateBook'
import SingleBook from './components/SingleBook/SingleBook'
import ProfilePage  from './components/ProfilePage/ProfilePage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import './sass/app.scss'
import About from './components/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


export const InputContext = createContext({})
export const SessionContext = createContext({
    sessionObject: null,
    setSessionObect: () => {},
})

const URL = 'http://localhost:8000/api/v1/'

/**
 *  level 1 - some kinda of state - dark/light mode   Provider (parent)
 *  level 6 dark/light mode (useContext)
 */

const App = () => {
    const [message, setMessage] = useState('')
    const [inputs, setInputs] = useState({})
    const [night, setNight] = useState(false);
    const [sessionObject, setSessionObject] = useState(getCookie(cookieName))
    const [urlButton, setUrlButton] = useState(false);

    return (
        <>
            <SessionContext.Provider value={{ sessionObject, setSessionObject }} >
                <InputContext.Provider
                    value={{
                        inputs,
                        handleInputChange: (inputName, inputValue) =>
                            setInputs({ ...inputs, [inputName]: inputValue }),

                        handleBulkInput: (inputObj) =>
                            setInputs({ ...inputs, ...inputObj }),
                    }}
                >
                    <Header night={night} setNight={setNight} />
                    <div className="content">
                        <div className={!night ? "day-mode-bg" : "night-mode-bg"}>
                            <Routes>
                                <Route path="" element={<HomePage />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/sign-up" element={<SignUp setSessionObject={setSessionObject} />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/search" element={<SearchPage/>} />
                                <Route 
                                    path="/books/create" 
                                    element={<CreateBook 
                                                urlButton={urlButton}
                                                setUrlButton={setUrlButton}
                                            />} />
                                <Route path="/books/edit/:bookId" element={<CreateBook />} />
                                <Route path="/books/:bookId" element={<SingleBook />} />
                                <Route path="/my-profile" element={<ProfilePage />} />
                            </Routes>
                        </div>
                    </div>
                </InputContext.Provider>
            </SessionContext.Provider>
            <Footer />
        </>
    )
}

export default App;
