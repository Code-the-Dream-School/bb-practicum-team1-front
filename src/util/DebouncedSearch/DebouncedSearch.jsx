import React, { useContext, useEffect } from 'react';
import TextInput from '../../components/inputs/TextInput';
import debounce from 'lodash.debounce';
import { InputContext } from "../../App";

// Should use existing TextInput component. Should take a prop called onDebounce 
// (as well as any props necessary to setup the TextInput component). 
// When the value for the textInput is changed it should start a timer. 
// If another change occurs before the timer is expired, the timer should be restarted. 
// When the timer reaches zero, onDebounce should be called.

const DebouncedSearch = ({ id, handleDebounce }) => {
    const { inputs, handleInputChange } = useContext(InputContext); 
    
    const debouncedSearch = debounce(onDebounce, 1000);

    useEffect(() => {
        debouncedSearch(inputs);
    }, [inputs[id], debouncedSearch]);

    // function onSearchChange(event) {
    //     handleInputChange(event.target.value);
    // }
    function onDebounce() {
        // perform the search here
        handleDebounce(inputs[id]);
    }

    return (
        <>    
            <TextInput 
                label="Search your book: "
                placeholder='write here...'
                type='text'
                id={id}
                name={id}
            />    
            {console.log(inputs)}           
        </>
    )
}

export default DebouncedSearch;