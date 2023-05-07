import React, { useState, createContext } from 'react'

// 3rd-party dependencies
import { Routes, Route } from 'react-router-dom'

// utility functions
import { getCookie, cookieName } from './util/Authentication'
// UI Components
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

// Page components
import HomePage from './components/HomePage/HomePage'
import { Login } from './components/LoginPage/LoginPage'
import { SignUp } from './components/SignupPage/SignUp'
import CreateBook from './components/CreateBook/CreateBook'
import SingleBook from './components/SingleBook/SingleBook'
import ProfilePage from './components/ProfilePage/ProfilePage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import SearchPage from './components/SearchPage/SearchPage'

import './sass/app.scss'
import About from './components/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Chat from './components/Chat/Chat'
import AllConversations from './components/Chat/AllConversations'
// import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

export const InputContext = createContext({})
export const SessionContext = createContext({
    sessionObject: null,
    setSessionObject: () => {},
})
export const LoadingContext = createContext({
    loading: false,
    setLoading: () => {},
})

/**
 *  level 1 - some kinda of state - dark/light mode   Provider (parent)
 *  level 6 dark/light mode (useContext)
 */

const App = () => {
    const [inputs, setInputs] = useState({})
    const [night, setNight] = useState(false)
    const [sessionObject, setSessionObject] = useState(getCookie(cookieName))
    const [urlButton, setUrlButton] = useState(false)
    const [loading, setLoading] = useState(false)    

    return (
        <>
            <SessionContext.Provider
                value={{ sessionObject, setSessionObject }}
            >
                <LoadingContext.Provider value={{ loading, setLoading }}>
                    <InputContext.Provider
                        value={{
                            inputs,
                            handleInputChange: (inputName, inputValue) =>
                                setInputs({
                                    ...inputs,
                                    [inputName]: inputValue,
                                }),

                        handleBulkInput: (inputObj) =>
                            setInputs({ ...inputs, ...inputObj }),
                    }}
                >
                    <Header night={night} setNight={setNight} />
                    <div className="content">
                        <div
                            className={!night ? 'day-mode-bg' : 'night-mode-bg'}
                        >
                            <Routes>
                                <Route path="" element={<HomePage />} />
                                    <Route
                                        path="/login"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="anonymous">
                                                <Login
                                                    setSessionObject={
                                                        setSessionObject
                                                    }
                                                />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/sign-up"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="anonymous">
                                                <SignUp
                                                    setSessionObject={
                                                        setSessionObject
                                                    }
                                                />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route path="/about" element={<About />} />
                                    <Route
                                        path="/search"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <SearchPage />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/books/create"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <CreateBook 
                                                    urlButton={urlButton}
                                                    setUrlButton={setUrlButton}
                                                />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/books/edit/:bookId"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <CreateBook 
                                                    urlButton={urlButton}
                                                    setUrlButton={setUrlButton}
                                                />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/books/:bookId"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <SingleBook />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/login"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="anonymous">
                                                <Login
                                                    setSessionObject={
                                                        setSessionObject
                                                    }
                                                />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/sign-up"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="anonymous">
                                                <SignUp
                                                    setSessionObject={
                                                        setSessionObject
                                                    }
                                                />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route path="/about" element={<About />} />
                                    <Route
                                        path="/search"
                                        element={<SearchPage />}
                                    />
                                    <Route
                                        path="/books/create"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <CreateBook />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/books/edit/:bookId"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <CreateBook />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/books/:bookId"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <SingleBook />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/chat/:recipientId"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <Chat />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/chat/"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <AllConversations />
                                            </ProtectedRoute>
                                        }
                                    />
                                    <Route
                                        path="/my-profile"
                                        element={
                                            <ProtectedRoute requiredAuthLevel="user">
                                                <ProfilePage />
                                            </ProtectedRoute>
                                        }
                                    />
                                </Routes>
                            </div>
                        </div>
                    </InputContext.Provider>
                </LoadingContext.Provider>
            </SessionContext.Provider>
            {loading && <LoadingSpinner />}
            <Footer />
        </>
    )
}

export default App