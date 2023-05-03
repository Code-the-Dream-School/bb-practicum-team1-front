import { useContext } from 'react'
import { InputContext } from '../../App'
import './inputStyles.css'

export default function DropdownInput({ label, id, options, isRequired }) {
    const { inputs, handleInputChange } = useContext(InputContext)

    return (
        <label className="text-input-label" htmlFor={id}>
            {label}
            <select
                className="dropdown-select"
                id={id}
                name={id}
                value={inputs[id]}
                defaultValue=""
                onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                }
                required={isRequired}
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
    )
}
