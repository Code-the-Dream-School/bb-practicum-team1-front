// - Should have state tied to react context
// - Should take in an id that determines what key it will be stored under in the context object
// - Should have a value for textarea set to false by default
import { useContext } from "react";
import { inputContext } from "../../App";
import "./inputStyles.css";

const TextInput = ({ type, placeholder, label, id, textarea }) => {
  const { inputs, handleInputChange } = useContext(inputContext);

  console.log("INPUTS FROM TextInput.js", inputs);

  return (
    <>
      {!textarea ? (
        <label className="text-input-label" htmlFor={id}>
          {label}
          <input
            className="text-input"
            placeholder={placeholder}
            type={type}
            value={inputs[id]}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            id={id}
            name={id}
          />
          {/* <p>place for errors</p> */}
        </label>
      ) : (
        <label className="text-input-label" htmlFor={id}>
          {label}
          <textarea
            className="textarea-input"
            placeholder={placeholder}
            type={type}
            value={inputs[id]}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            id={id}
            name={id}
          />
          {/* <p>place for errors</p> */}
        </label>
      )}
    </>
  );
};

export default TextInput;
