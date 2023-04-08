import React, { useContext, useEffect, useCallback } from 'react';
import TextInput from '../../components/inputs/TextInput';
import _ from 'lodash';
import { InputContext } from "../../App";

// Should use existing TextInput component. Should take a prop called onDebounce 
// (as well as any props necessary to setup the TextInput component). 
// When the value for the textInput is changed it should start a timer. 
// If another change occurs before the timer is expired, the timer should be restarted. 
// When the timer reaches zero, onDebounce should be called.

const DebouncedSearch = ({ id, handleDebounce }) => {
    const { inputs, handleInputChange } = useContext(InputContext); 
    
    const debouncedSearch = useCallback(_.debounce(query => handleDebounce(query), 500), []);

    useEffect(() => {
        // cancel any previous debounce action
        debouncedSearch.cancel();
        debouncedSearch(inputs);
    }, [inputs[id], debouncedSearch(inputs)]);

    return (
        <>    
            <TextInput 
                label="Search your book: "
                placeholder='write here...'
                type='text'
                id={id}
                name={id}
            />    
        </>
    )
}

export default DebouncedSearch;