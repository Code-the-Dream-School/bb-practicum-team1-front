import React, { useState, useContext } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import { getAddressAutocomplete } from "../../adapters/address-adapter"; 
import { InputContext } from '../../App';

const AddressSearch = ({ id }) => {
    const [addressSuggestions, setAddressSuggestions] = useState([]);
    const {inputs, handleInputChange} = useContext(InputContext);

    const shouldShowDropdown = (values, currentValue) => {
        if (!currentValue || currentValue === "") {
            return false;
        }
        if (!values || values.length == 0 || inputs[id] === "") {
            return false;
        }
        if (values.length == 1 && values[0].address === currentValue ) {
            return false;
        }
        return true;
    }

    const processSearch = async (value) => {
        //Unwrapping promise
        if (value && value !== "") {
            getAddressAutocomplete(value).then(r => {        
                setAddressSuggestions(r || []);             
            })
        } else {
            setAddressSuggestions([])
        }    
    }

    const onSelect = (selected) => {
        inputs[id] = selected;
        setAddressSuggestions([])
        if (inputs[`${id}Debounce`] !== selected.address) {
            handleInputChange(`${id}Debounce`, selected.address);           
        }
    }

    return (
        <>
            <DebouncedSearch 
                id={`${id}Debounce`} 
                handleDebounce={processSearch} 
                label={"Address"} 
                placeholder={"ex. 2200 Engle Rd"} 
            />
            {shouldShowDropdown(addressSuggestions, inputs[`${id}Debounce`]) ?
                <ul className="address-items-buttons">
                    {addressSuggestions.map(e => {
                        return <li>
                                    <button
                                        id={e.address} 
                                        onClick={() => onSelect(e)}
                                    >
                                        {e.address}
                                    </button>
                                </li>
                    })}
                </ul>
            : null}
        </>
    );


};

export default AddressSearch;