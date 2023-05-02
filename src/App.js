import React, { useState, useEffect, createContext } from 'react'

// 3rd-party dependencies
import { Routes, Route } from 'react-router-dom'

// utility functions
import { getAllData } from './util/index'
import DebouncedSearch from './util/DebouncedSearch/DebouncedSearch'
import {
    setCookie,
    getCookie,
    deleteCookie,
    cookieName,
} from './util/Authentication'

// UI Components
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

// Page components
import HomePage from './components/HomePage/HomePage'
import { Login } from './components/LoginPage/LoginPage'
import { SignUp } from './components/SignupPage/SignUp'
import LoginPage from './components/LoginPage/LoginPage'
import CreateBook from './components/CreateBook/CreateBook'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import './sass/app.scss'
import About from './components/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BookItem from './components/BookItem/BookItem'
import SingleBook from './components/SingleBook/SingleBook'
// import SearchPage from './components/SearchPage/SearchPage'
import { PagePagination } from './components/PagePagination/Pagination'


export const InputContext = createContext({})
export const SessionContext = createContext({
    sessionObject: null,
    setSessionObect: () => {},
})

//This is for testing//
const bookArr = [
    {
        title: 'Pride and Prejudice',
        description:
            'It is a truth universally acknowledged that when most people think of Jane Austen they think of this charming and humorous story of love, difficult families and the tricky task of finding a handsome husband with a good fortune.',
        genre: 'Romance',
        author: 'Jane Austen',
    },
    {
        title: 'The Lion, the Witch and the Wardrobe',
        description:
            "C.S. Lewis's timeless tale captured the hearts of children everywhere with its fantastical world through the wardrobe, full of fauns, dwarves and anthropomorphised animals. Whether you were Peter, Edmund, Susan or Lucy, we all wanted to put on a fur coat and go on a snow-laden adventure with Mr Tumnus.",
        genre: 'Novel',
        author: 'C.S. Lewis',
    },
    {
        title: 'Frankenstein',
        description:
            'The book tells the story of Victor Frankenstein, a Swiss student of natural science who creates an artificial man from pieces of corpses and brings his creature to life.',
        genre: 'Gothic Fiction',
        author: 'Mary Shelley',
    },
]

const bigBookArray = [
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
    ...bookArr,
]

const URL = 'http://localhost:8000/api/v1/'

/**
 *  level 1 - some kinda of state - dark/light mode   Provider (parent)
 *  level 6 dark/light mode (useContext)
 */

const App = () => {
    const [message, setMessage] = useState('')
    const [inputs, setInputs] = useState({})
    const [sessionObject, setSessionObject] = useState(getCookie(cookieName))
    const [loading, setLoading] = useState(false)
    // const [quote, setQuote] = useState({})
    const [night, setNight] = useState(false);
    const [urlButton, setUrlButton] = useState(false);

    // useEffect(() => {
    //     ;(async () => {
    //         const myData = await getAllData(URL)
    //         setMessage(myData.data)
    //     })()

    //     return () => {
    //         console.log('unmounting')
    //     }
    // }, [])

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
                                <Route 
                                    path="/books/create" 
                                    element={<CreateBook 
                                                urlButton={urlButton}
                                                setUrlButton={setUrlButton}
                                            />} />
                                <Route path="/books/edit/:bookId" element={<CreateBook />} />
                                <Route path="/books/:bookId" element={<SingleBook />} />
                            </Routes>
                        </div>
                    </div>
                </InputContext.Provider>
            </SessionContext.Provider>
            <Footer />
            {/* <div> */}
            {/* <div className="buttons">
                        <button
                            className="btn get-quote"
                            onClick={getRandomQuote}
                        >
                            Loading Spinner Quote Button (click here)
                        </button>
                    </div> */}
            {/* {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <div className="quote-section">
                            <blockquote className="quote">
                                {quote.content}
                            </blockquote>{' '}
                            <span className="author">{quote.author}</span>
                        </div>
                    )} */}
                {/* </div> */}
        </>
    )
}

export default App;
