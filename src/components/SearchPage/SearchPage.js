import React, { useState, useEffect } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import DropdownInput from '../../components/inputs/DropdownInput';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { PagePagination } from '../PagePagination/Pagination';
import { getAllBooksAdapter } from '../../adapters/book-adapters';
import ToggleSwitch from '../../util/ToggleSwitch/ToggleSwitch';

const SearchPage = () => {
    const [books, setBooks] = useState([]);
    const [direction, setDirection] = useState('az');
    const [attribute, setAttribute] = useState('title');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        sort(books, direction, attribute)
    }, [direction, attribute, books])

    // Depending on the value of dropdown it searchs either by title or by author
    const processSearch = (e) => {
        let type = e.inputs.searchType;
        if (!e.inputs.searchPageDebouncedSearch) {
            setBooks([]);
            return;
        }
        let bookInput = {};
        if (!type || type === 'title') {
            bookInput.title = e.inputs.searchPageDebouncedSearch;
        } 
        if (type === 'author') {
            bookInput.author = e.inputs.searchPageDebouncedSearch;
        }
        setLoading(true)
        getAllBooksAdapter(bookInput)
        .then(data => {
            if (data) {
                setBooks(data.books);
            } else {
                setBooks([]);
            }
            setLoading(false)
        });
    };

    const sort = (array, direction, attribute) => {
        if (attribute === 'title') {
            return sortByTitle(array, direction);
        } else {
            return sortByAuthor(array, direction);
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
        return array;
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
        return array;
    };

    return (
        <>
            <DebouncedSearch 
                id={'searchPageDebouncedSearch'}
                 handleDebounce={processSearch}
            />
            <div style={{ display: "flex" }}>
                <DropdownInput 
                    label={''}
                    id={'searchType'}
                    options={[{value: 'title', label: 'Search by title'}, {value: 'author', label: 'Search by author'}]}
                    defaultValue={'title'} showPlaceholder={false}
                />
                <ToggleSwitch toggleChecked={direction === "za"} handleToggleChange={() => setDirection(direction === "az" ? "za" : "az")} 
                    labelOn={"Z to A"} labelOff={"A to Z"}/>
                <ToggleSwitch toggleChecked={attribute === 'author'} handleToggleChange={() => setAttribute(attribute === "title" ? "author" : "title")} 
                    labelOn={"Sort by author"} labelOff={"Sort by title"}/>
            </div>
            {loading ? <LoadingSpinner /> : null}
            <PagePagination books={sort(books,  direction, attribute)}/>              
        </>
    );
};

export default SearchPage; 