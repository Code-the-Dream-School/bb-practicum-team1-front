import React, { useState, useContext } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import { getAddressAutocomplete } from "../../adapters/address-adapter"; 
import { InputContext } from '../../App';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const AddressSearch = ({ id }) => {
    const [addressSuggestions, setAddressSuggestions] = useState([]);
    const {inputs, handleInputChange} = useContext(InputContext);
    const [loading, setLoading] = useState(false);

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
        if (value.inputs[`${id}Debounce`] && value.inputs[`${id}Debounce`] !== "") {
            setLoading(true)
            getAddressAutocomplete(value.inputs[`${id}Debounce`]).then(r => {        
                setAddressSuggestions(r || []);             
            })
        } else {
            setAddressSuggestions([])
        }   
        setLoading(false) 
    }

    const onSelect = (selected) => {
        inputs[id] = selected;
        setAddressSuggestions([])
        if (inputs[`${id}Debounce`] !== selected.address) {
            handleInputChange(`${id}Debounce`, selected.address);           
        }
    }

    return (
        <div className="debounced-search">
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
            {loading ? <LoadingSpinner /> : null}
        </div>
    );


};

export default AddressSearch;