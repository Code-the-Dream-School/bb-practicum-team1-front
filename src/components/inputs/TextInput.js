import { useContext } from "react";
import { inputContext } from "../../App";
import "./inputStyles.css";

const TextInput = ({ type, placeholder, label, id, textarea }) => {
  const { inputs, handleInputChange } = useContext(inputContext);

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
        </label>
      )}
    </>
  );
};

export default TextInput;
