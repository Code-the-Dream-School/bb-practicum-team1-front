import React, { useState, createContext } from 'react'

// 3rd-party dependencies
import { Routes, Route } from 'react-router-dom'

// utility functions
import { getCookie } from './util/Authentication'

// Page components
import HomePage from './components/HomePage/HomePage'
import { Login } from './components/LoginPage/LoginPage'
import { SignUp } from './components/SignupPage/SignUp'
import CreateBook from './components/CreateBook/CreateBook'

import './sass/app.scss'
import SearchPage from './components/SearchPage/SearchPage'
import About from './components/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


export const InputContext = createContext({})
export const SessionContext = createContext({});

const App = () => {
    const [inputs, setInputs] = useState({})
    const [sessionObject, setSessionObject] = useState(getCookie());
    const [night, setNight] = useState(false);

    return (
        <>
            <div className="content">
                <div className={!night ? "" : "night-mode-bg"}>
                <SessionContext.Provider
                    value={{sessionObject, setSessionObject}}
                >
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
                        <Routes>
                            <Route path="" element={<HomePage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/sign-up" element={<SignUp setSessionObject={setSessionObject} />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/books/create" element={<CreateBook />} />
                            <Route path="/search" element={<SearchPage/>} />
                            <Route
                                path="/books/edit/:bookId"
                                element={<CreateBook />}
                            />
                            //Probably SingleBook element should use adapter to get a book with specific id from backend
                            {/* <Route
                                path="/books/:bookId"
                                element={<SingleBook item={testBook} />} />*/}
                        </Routes>
                    
                    </InputContext.Provider>
                </SessionContext.Provider>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
