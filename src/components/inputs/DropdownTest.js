import { useContext } from "react";
import { inputContext } from "../../App";
import "./inputStyles.css";

export default function DropdownTest({ label, id, options }) {
  const { inputs, handleInputChange } = useContext(inputContext);

  console.log("INPUTS FROM DropdownTest.js", inputs);

  return (
    <label className="text-input-label" htmlFor={id}>
      {label}
      <select
        className="dropdown-select"
        id={id}
        name={id}
        value={inputs[id]}
        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
