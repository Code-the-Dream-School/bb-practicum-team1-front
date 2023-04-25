import React, { useState, useContext } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import { getAddressAutocomplete } from "../../adapters/address-adapter"; 
import { InputContext } from '../../App';

const AddressSearch = ({ id }) => {
    const [addressSuggestions, setAddressSuggestions] = useState([]);
    const inputs = useContext(InputContext);

    const processSearch = async (value) => {
        //Unwrapping promise
        if (value !== "") {
            getAddressAutocomplete(value).then(r => {              
                setAddressSuggestions(r);             
            })
        }     
    }

    const onSelect = (selected) => {
        inputs[id] = JSON.parse(selected.target.value);
        inputs[`${id}Debounce`] = JSON.parse(selected.target.value).address;
        console.log(inputs[id]);
    }

    return (
        <>
            <DebouncedSearch id={`${id}Debounce`} handleDebounce={processSearch} />
            <select onChange={onSelect}>
                <option value={JSON.stringify({})} selected>
                    Select address
                </option>
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
        </>
    );


};

export default AddressSearch;