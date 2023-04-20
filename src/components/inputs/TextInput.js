import { useContext } from "react";
import { InputContext } from "../../App";
import "./inputStyles.css";

const TextInput = ({ type, placeholder, label, id, textarea }) => {
  const { inputs, handleInputChange } = useContext(InputContext);

  return (
    <>
      {!textarea ? (
        <label className="text-input-label" htmlFor={id}>
          {label}
          <input
            className="text-input"
            placeholder={placeholder}
            type={type}
            value={inputs[id] ?? ''}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            id={id}
            name={id}
            required
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
            required
            name={id}
          />
        </label>
      )}
    </>
  );
};

export default TextInput;
