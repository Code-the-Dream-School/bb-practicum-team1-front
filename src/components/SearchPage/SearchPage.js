import React from 'react';
import DebouncedSearch from '';
import AddressSearch from '';
import PaginatedResults from '';

const SearchPage = () => {
    return (
        <>
            <DebouncedSearch />
            <AddressSearch />
            <PaginatedResults />
        </>
    );
};

export default SearchPage; 