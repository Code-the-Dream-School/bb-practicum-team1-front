import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllData } from './util/index';
import { HomePage } from './components/HomePage/HomePage';
import { LoginPage } from './components/LoginPage/LoginPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const URL = 'http://localhost:8000/api/v1/';

const App = () => {

const [message, setMessage] = useState(''); 

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL)
      setMessage(myData.data);
    })();
      
    return () => {
      console.log('unmounting');
    }

  }, []);

  return (
    <>
      <h1>{message}</h1>
      
      <Routes>
        <Route 
          exact path="/" 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />
        <Route  path="/login" element={<LoginPage />} />
      </Routes> 
    </>
  );
}

export default App;
