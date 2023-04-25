import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getAllData } from './util/index'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import { Login } from './components/LoginPage/LoginPage'
import { SignUp } from './components/SignupPage/SignUp'
import CreateBook from './components/CreateBook/CreateBook'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { setCookie, getCookie, deleteCookie } from './util/Authentication'
import './sass/app.scss'
import { PagePagination } from './components/PagePagination/Pagination'

export const InputContext = createContext({})

export const SessionContext = createContext({});

const testBook = {
    title: 'Cinderella',
    language: 'English',
    ageRange: 'kids',
    publishingYear: 2022,
    status: 'open',
    image: true,
    description:
        "Catrina and her family are moving to the coast of Northern California because her little sister, Maya, is sick. Cat isn't happy about leaving her friends for Bahía de la Luna, but Maya has cystic fibrosis and will benefit from the cool, salty air that blows in from the sea. As the girls explore their new home, a neighbor lets them in on a secret: There are ghosts in Bahía de la Luna. Maya is determined to meet one, but Cat wants nothing to do with them. As the time of year when ghosts reunite with their loved ones approaches, Cat must figure out how to put aside her fears for her sisters sake -- and her own.Raina Telgemeier has masterfully created a moving and insightful story about the power of family and friendship, and how it gives us the courage to do what we never thought possible.",
    genre: 'Literary Fiction',
    author: 'Charles Perrault',
}

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

const App = () => {
    const [message, setMessage] = useState('')
    const [inputs, setInputs] = useState({})
    const [sessionObject, setSessionObject] = useState(getCookie());
    const [loading, setLoading] = useState(false)
    const [quote, setQuote] = useState({})
    const [night, setNight] = useState(false);

    const getRandomQuote = () => {
        setLoading(true)
        setTimeout(() => {
            fetch('https://api.quotable.io/random')
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false)
                    setQuote(data)
                })
        }, 5000)
    }

    /* EXAMPLE: DropdownInput selection options
  
  const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
  ]
  */

    useEffect(() => {
        ;(async () => {
            const myData = await getAllData(URL)
            setMessage(myData.data)
        })()

        return () => {
            console.log('unmounting')
        }
    }, [])

    return (
        <>
            <div className="content">
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
                    <div className={!night ? "" : "night-mode-bg"}>
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="/login" element={<Login setSessionObject={setSessionObject} />} />
                        <Route path="/sign-up" element={<SignUp setSessionObject={setSessionObject} />} />
                        {/* <Route path="/about" element={<About />} /> */}
                        <Route path="/books/create" element={<CreateBook />} />
                        <Route
                            path="/books/edit/:bookId"
                            element={<CreateBook />}
                        />
                        {/* <Route
                            path="/books/:bookId"
                            element={<SingleBook item={testBook} />}
                        /> */}
                        </Routes>
                        </div>
                    </InputContext.Provider>
                </SessionContext.Provider>
                <Footer />
                <div>
                    <div className="buttons">
                        <button
                            className="btn get-quote"
                            onClick={getRandomQuote}
                        >
                            Loading Spinner Quote Button (click here)
                        </button>
                    </div>
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
                </div>
            </div>
        </>
    )
}

export default App
