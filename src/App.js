import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";


function App() {
  const [, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <div>
      <form >
  
        <h1>Log in</h1>
        <label>
          <p> User Name: </p>
          <input/>
        </label>
        <label>
          <p> Password</p>
          <input/>
          <br />
        </label>
        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
</div>
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
