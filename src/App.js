import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { getAllData } from './util/index';
import { HomePage } from './components/HomePage/HomePage';
import { LoginPage } from './components/LoginPage/LoginPage';

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

  const ProtectedRoute = ({ children }) => {
    // Placeholder to actually check if user is authenticated
    const useAuth = () => {
      if (Math.random() > 0.5) {
        return true;
      }
      return false;
    }

    const user = useAuth();
    if (!user) {
      // User is not authenticated
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <>
      <h1>{message}</h1>
      <ProtectedRoute>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>  
      </ProtectedRoute> 
      <Routes>
        <Route  path="/login" element={<LoginPage />} />
      </Routes> 
    </>
  );
}

export default App;
