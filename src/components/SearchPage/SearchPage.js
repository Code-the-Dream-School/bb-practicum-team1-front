import React, { useState } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import DropdownInput from '../../components/inputs/DropdownInput';
import { PagePagination } from '../PagePagination/Pagination';
import { getAllBooksAdapter } from '../../adapters/book-adapters';

const SearchPage = () => {
    const [books, setBooks] = useState([]);
    const [direction, setDirection] = useState('az');
    const [attribute, setAttribute] = useState('title');

    // Depending on the value of dropdown it searchs either by title or by author
    const processSearch = (e) => {
        let type = e.searchType;
        if (!e.searchPageDebouncedSearch) {
            setBooks([]);
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
                setBooks(data.books);
            } else {
                setBooks([]);
            }
        });
    };

    const sort = (array, direction, attribute) => {
        if (attribute === 'title') {
            sortByTitle(array, direction);
        } else {
            sortByAuthor(array, direction);
        }
    }

    //Sorting function. Sort books by "Title" A-to-Z / Z-to-A
    const sortByTitle = (array, direction) => {
        if (direction === 'za') {
            //descending alphabetical order by "Title" (Z-to-A)
            array.sort((a, b) => 
                a.title.toLowerCase() === b.title.toLowerCase() ? 0 : 
                a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1); 
        } else {
            //ascending alphabetical order by "Title" (A-to-Z)
            array.sort((a, b) => 
                a.title.toLowerCase() === b.title.toLowerCase() ? 0 : 
                a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1); 
        }
    }

    //Sorting function. Sort books by "Author" from A-to-Z / Z-to-A
    const sortByAuthor = (array, direction) => {
        if (direction === 'za') {
            //descending alphabetical order by "Author" (Z-to-A)
            array.sort((a, b) => 
                a.author.toLowerCase() === b.author.toLowerCase() ? 0 : 
                a.author.toLowerCase() < b.author.toLowerCase() ? 1 : -1); 
        } else {
            //ascending alphabetical order by "Author" (A-to-Z)
            array.sort((a, b) => 
                a.author.toLowerCase() === b.author.toLowerCase() ? 0 : 
                a.author.toLowerCase() < b.author.toLowerCase() ? -1 : 1); 
        } 
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