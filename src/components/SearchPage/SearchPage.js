import React, { useState, useContext } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import DropdownInput from '../../components/inputs/DropdownInput';
// import PaginatedResults from '../PagePagination/PagePagination';
import { getAllBooksAdapter } from '../../adapters/book-adapters';
import { InputContext } from "../../App";

const SearchPage = () => {
    const [searchType, setSearchType] = useState('title');
    const { inputs } = useContext(InputContext); 

    const processSearch = (e) => {
        let type = searchType;
        let bookInput = {};
        if (type === 'title') {
            bookInput.title = inputs['searchType'];
        } 
        if (type === 'author') {
            bookInput.author = inputs['searchType'];
        }
        getAllBooksAdapter(bookInput)
        .then(data => console.log(data));
    };

    return (
        <>
            <DebouncedSearch 
                id={'searchPageDebouncedSearch'}
                handleDebounce={processSearch}
            />
            <DropdownInput 
                label={'Choose:'}
                id={'searchType'}
                options={[{value: 'title', label: 'Search by title'}, {value: 'author', label: 'Search by author'}]}
                defaultValue={'title'} showPlaceholder={false}
            />
            {/* <PaginatedResults /> */}
        </>
    );
};

export default SearchPage; 