import React, { useState, useEffect, createContext } from "react";
import TextInput from "./components/inputs/TextInput";
import { getAllData } from "./util/index";
import Dropdowninput from "./components/inputs/DropdownInput";

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
        <Dropdowninput
          label="Dropdown Menu"
          id="DropdownMenu"
          options={options}
        />
      </inputContext.Provider>
    </>
  );
}

export default App;
