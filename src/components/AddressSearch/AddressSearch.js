import React, { useState } from 'react';
import DebouncedSearch from '../DebouncedSearch/DebouncedSearch';
import { getAddressCoordinate, getAddressAutocomplete } from "../../adapters/address-adapter"; 

const CreateAddress = ({ id }) => {
    const [addressSuggestions, setAddressSuggestions] = useState([]);

    const processSearch = (value) => {
        //Unwrapping promise
        getAddressAutocomplete(value).then(data => {
            setAddressSuggestions(data)
        })       
    }

    return (
        <>
            <DebouncedSearch id={id} handleDebounce={processSearch} />
            <ul>
                {addressSuggestions.map((item) => 
                    <li id={item} value={item}>{item}</li>
                )}
            </ul>
        </>
    );


};

export default CreateAddress;