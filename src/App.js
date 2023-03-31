import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllData } from './util/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HomePage } from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import CreateBook from './components/CreateBook/CreateBook';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './sass/app.scss'

export const InputContext = createContext({});

const URL = 'http://localhost:8000/api/v1/'

const App = () => {
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
      <InputContext.Provider
        value={{
            inputs,
            handleInputChange: (inputName, inputValue) =>
                setInputs({ ...inputs, [inputName]: inputValue }),
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
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          <Route  
            path="/login" 
            element={<LoginPage />} 
          />
          <Route  
          path="/createBook" 
          element={<CreateBook />} 
        />
      </Routes> 
      </InputContext.Provider>  
      <Footer />
    </>
  );
}

export default App;
