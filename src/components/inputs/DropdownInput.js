import { useContext } from 'react'
import { InputContext } from '../../App'
import './inputStyles.css'

export default function DropdownInput({ label, id, options, defaultValue, showPlaceholder }) {
    const { inputs, handleInputChange } = useContext(InputContext)
    console.log(options)
    return (
        <label className="text-input-label" htmlFor={id}>
            {label}
            <select
                className="dropdown-select"
                id={id}
                name={id}
                value={inputs[id]}
                defaultValue={defaultValue}
                onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                }
            >
                {showPlaceholder ? 
                    <option value="" disabled>
                        Select your option
                    </option>
                    : null
                }
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    )
}
