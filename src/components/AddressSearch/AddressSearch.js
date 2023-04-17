import React, { useState } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import DropdownInput from '../inputs/DropdownInput'
import { getAddressAutocomplete } from "../../adapters/address-adapter"; 

const AddressSearch = ({ id }) => {
    const [addressSuggestions, setAddressSuggestions] = useState([]);

    const processSearch = (value) => {
        console.log(value)
        //Unwrapping promise
        if (value !== "") {
            getAddressAutocomplete(value).then(data => {
                setAddressSuggestions(data)
            })
        }     
    }

    const convert = (raw) => {
        const data = raw.map((item) => {
            const val = {};
            val.value = item.address;
            return val;
        })
        return data;
    }

    return (
        <>
            <DebouncedSearch id={id} handleDebounce={processSearch} />
            <DropdownInput 
                    id={id}
                    options={convert(addressSuggestions)}
                />
        </>
    );


};

export default AddressSearch;