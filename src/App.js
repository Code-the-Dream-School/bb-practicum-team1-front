import React, { useState, useEffect } from "react";
import TextInput from "./components/inputs/TextInput";
import { getAllData } from "./util/index";
import { createContext } from "react";
import DropdownTest from "./components/inputs/DropdownTest";

export const inputContext = createContext({});

const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");
  const [inputs, setInputs] = useState({});

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

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
    <>
      <h1>{message}</h1>
      <inputContext.Provider
        value={{
          inputs,
          handleInputChange: (inputName, inputValue) =>
            setInputs({ ...inputs, [inputName]: inputValue }),
        }}
      >
        <TextInput
          label="Text Input"
          id="testInput"
          type="text"
          placeholder="Enter text here"
          textarea={false}
        />
        <TextInput
          label="Text Area"
          id="textArea"
          type="textarea"
          placeholder="Enter text here"
          textarea={true}
        />
        <DropdownTest
          label="Test Dropdown"
          id="testDropdown"
          options={options}
        />
      </inputContext.Provider>
    </>
  );
}

export default App;
