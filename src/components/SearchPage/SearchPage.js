import React, { useContext, useState } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import DropdownInput from '../../components/inputs/DropdownInput';
import { PagePagination } from '../PagePagination/Pagination';
import { getAllBooksAdapter } from '../../adapters/book-adapters';
import { InputContext } from '../../App'

const SearchPage = () => {
    const inputs = useContext(InputContext)
    const [books, setBooks] = useState([])
    const processSearch = (e) => {
        let type = e.searchType;
        if (!e.searchPageDebouncedSearch) {
            setBooks([])
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
            if (data) {
                setBooks(data.books)
            } else {
                setBooks([])
            }
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
            <PagePagination books={books}/>   
        </>
    );
};

export default SearchPage; 