import React, { useState, useContext } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import { getAddressAutocomplete } from "../../adapters/address-adapter"; 
import { InputContext } from '../../App';

const AddressSearch = ({ id }) => {
    const [addressSuggestions, setAddressSuggestions] = useState([]);
    const {inputs, handleInputChange} = useContext(InputContext);

    const shouldShowDropdown = (values, currentValue) => {
        if (!currentValue) {
            return false;
        }
        if (!values || values.length == 0) {
            return false;
        }
        if (values.length == 1 && values[0].address === currentValue) {
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
        inputs[id] = JSON.parse(selected.target.value);
        setAddressSuggestions([])
        if (inputs[`${id}Debounce`] !== JSON.parse(selected.target.value).address) {
            handleInputChange(`${id}Debounce`, JSON.parse(selected.target.value).address);           
        }
    }

    return (
        <>
            <DebouncedSearch id={`${id}Debounce`} handleDebounce={processSearch} />
            {shouldShowDropdown(addressSuggestions, inputs[`${id}Debounce`]) ?
            <select className="addressSearchDropdown" onChange={onSelect}>
                <option value={JSON.stringify({})} 
                                id='empty' 
                                key='empty'
                    >Select value...</option>
                {addressSuggestions.map(e => {
                    return <option 
                                value={JSON.stringify(e)} 
                                id={e.address} 
                                key={e.address}
                            >
                                {e.address}
                            </option>
                })}
            </select>
            : null}
        </>
    );


};

export default AddressSearch;