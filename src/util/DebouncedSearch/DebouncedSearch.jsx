import React, { useState, useEffect, useRef } from 'react';
import TextInput from '../../components/inputs/TextInput';
import debounce from 'lodash/debounce';

// Should use existing TextInput component. Should take a prop called onDebounce 
// (as well as any props necessary to setup the TextInput component). 
// When the value for the textInput is changed it should start a timer. 
// If another change occurs before the timer is expired, the timer should be restarted. 
// When the timer reaches zero, onDebounce should be called.

const DebouncedSearch = ({ onDebounce }) => {
    const [searchTerm, setSearchTerm] = useState('search');
    const debouncedSearch = useRef(debounce(performSearch, 500)).current;
        
    useEffect(() => {
        debouncedSearch(searchTerm);
    }, [searchTerm]);

    function onSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    function performSearch(searchTerm) {
        // perform the search here
    }

    return (
        <>
            <TextInput 
                className="text-input"
                label="Search your book: "
                placeholder='write here...'
                type='text'
                // value={searchTerm}
                onChange={onSearchChange}
                id='searchInput'
                name='searchInput'
                onDebounce
                autoFocus
            />
            {console.log(searchTerm)}
        </>
    )
}

export default DebouncedSearch;