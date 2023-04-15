import React, { useState } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import { getAddressAutocomplete } from "../../adapters/address-adapter"; 

const AddressSearch = ({ id }) => {
    const [addressSuggestions, setAddressSuggestions] = useState([]);

    const processSearch = (value) => {
        console.log(value)
        //Unwrapping promise
        if (value !== "") {
            getAddressAutocomplete(value).then(data => {
                setAddressSuggestions(data)
                console.log(addressSuggestions);
            })
        }     
    }

    return (
        <>
            <DebouncedSearch id={id} handleDebounce={processSearch} />
            <ul>
                {addressSuggestions.map((item) => 
                    <li id={`${item.latitude}|${item.longitude}`} value={item.address}>{item.address}</li>
                )}
            </ul>
        </>
    );


};

export default AddressSearch;