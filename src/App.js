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
import { setCookie, getCookie, deleteCookie, cookieName } from './util/Authentication'
import './sass/app.scss'
import { PagePagination } from './components/PagePagination/Pagination'
import  ProfilePage  from './components/ProfilePage/ProfilePage'
export const InputContext = createContext({})
export const SessionContext = createContext({});


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
    console.log(getCookie(cookieName))
    const [sessionObject, setSessionObject] = useState(getCookie(cookieName));
    const [message, setMessage] = useState('')
    const [inputs, setInputs] = useState({})

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
            <Header />
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
                {/* EXAMPLE: How to add TextInput and DropdownInput
        
        <TextInput
            label="Text Input"
            id="testInput"
            type="text"
            placeholder="Enter text here"
            textarea={false}
        />
        <Route  
          path="/login" 
          element={<LoginPage />} 
        />
        <Route  
          path="/createBook" 
          element={<CreateBook />} 
        />
        <TextInput
            label="Text Area"
            id="textArea"
            type="textarea"
            placeholder="Enter text here"
            textarea={true}
        />
        <DropdownInput
            label="Dropdown Menu"
            id="DropdownMenu"
            options={options}
        /> */}

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            // <ProtectedRoute>
                            <HomePage />
                            // </ProtectedRoute>
                        }
                    />
                    {/* <ProtectedRoute> */}
                    <Route path="/login" element={<Login />} />
                    {/* </ProtectedRoute> */}

                    {/* <ProtectedRoute> */}

                    <Route path="/sign-up" element={<SignUp />} />

                    {/* </ProtectedRoute> */}
                    <Route path="/createBook" element={<CreateBook />} />
                    <Route
                        path="/pagination"
                        element={<PagePagination books={bigBookArray} />}
                    />
                        <Route path='/my-profile' element={<ProfilePage myProfile={!!sessionObject}/>}/>
                        <Route path='/profile/:userid' element={<ProfilePage  />} />
                </Routes>
            </InputContext.Provider>
            </SessionContext.Provider>
            <Footer />
        </>
    )
}

export default App
