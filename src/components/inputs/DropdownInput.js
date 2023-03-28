import { useContext } from "react";
import { inputContext } from "../../App";
import "./inputStyles.css";

export default function Dropdowninput({ label, id, options }) {
  const { inputs, handleInputChange } = useContext(inputContext);

  return (
    <label className="text-input-label" htmlFor={id}>
      {label}
      <select
        className="dropdown-select"
        id={id}
        name={id}
        value={inputs[id]}
        defaultValue=""
        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
      >
        <option value="" disabled>
          Select your option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
