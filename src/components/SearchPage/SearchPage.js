import React, { useContext, useState } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import DropdownInput from '../../components/inputs/DropdownInput';
//import PaginatedResults from '../PagePagination/PagePagination';
import { getAllBooksAdapter } from '../../adapters/book-adapters';
import { InputContext } from '../../App'

const SearchPage = () => {
    const [inputs, handleChange] = useContext(InputContext)
    const [books, setBooks] = useState([])
    const processSearch = (e) => {
        let type = inputs['searchType'];
        console.log(`Search type ${type}`)
        console.log(`Search value ${e.searchPageDebouncedSearch}`)
        if (!e.searchPageDebouncedSearch) {
            return;
        }
        let bookInput = {};
        if (!type || type === 'title') {
            bookInput.title = e.searchPageDebouncedSearch;
        } 
        if (type === 'author') {
            bookInput.author = e.searchPageDebouncedSearch;
        }
        getAllBooksAdapter(bookInput)
        .then(data => {
            console.log(data);
            setBooks(data)
        });
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
            {//<PaginatedResults />
            }           
        </>
    );
};

export default SearchPage; 