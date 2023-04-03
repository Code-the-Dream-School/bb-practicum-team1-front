import React, { useState } from 'react';
import TextInput from '../components/inputs/TextInput';

const DebouncedSearch = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <TextInput 
            className="text-input"
            placeholder='Search...'
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            id='searchInput'
            name='searchInput'
            autoFocus
        />
    )
}

export default DebouncedSearch;