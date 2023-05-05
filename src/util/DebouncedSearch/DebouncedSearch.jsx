import React, { useContext, useEffect, useCallback } from 'react';
import TextInput from '../../components/inputs/TextInput';
import _ from 'lodash';
import { InputContext } from "../../App";

// Should use existing TextInput component. Should take a prop called onDebounce 
// (as well as any props necessary to setup the TextInput component). 
// When the value for the textInput is changed it should start a timer. 
// If another change occurs before the timer is expired, the timer should be restarted. 
// When the timer reaches zero, onDebounce should be called.

const DebouncedSearch = ({ id, handleDebounce, label, placeholder }) => {
    const inputs = useContext(InputContext); 
    console.log(inputs);
    const debounceSearch = useCallback(_.debounce(query => handleDebounce(query), 500), []);
    useEffect(() => {
        // cancel any previous debounce action
        debounceSearch.cancel();
        debounceSearch(inputs);
    }, [inputs?.inputs?.[id], debounceSearch]);    

    return (
        <>    
            <div className='debouncedInputField'>
                <TextInput 
                    label={label}
                    placeholder={placeholder}
                    type='text'
                    id={id}
                    name={id}
                />
            </div>
        </>
    )
}

export default DebouncedSearch;