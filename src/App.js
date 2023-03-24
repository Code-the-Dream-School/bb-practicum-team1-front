import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";


const URL = "http://localhost:8000/api/v1/";

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

  const [userName, setUserName] = useState({
    userName: " "
  });
  const [password, setPassword] = useState({
    password: " "
  });

  return (
    <div>
      <form >
  
        <h1>Log in</h1>
        <label>
          <p> User Name: </p>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            name="userName"
          />
        </label>
        <label>
          <p> Password</p>
          <input onChange={(e) => setPassword(e.target.value)} name="password" type="password"/>
          <br />
        </label>
        <div>
          <button type="submit"> Submit </button>
        </div>
      </form>
</div>
  );
}

export default App;
