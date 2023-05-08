import React, { useState, useEffect, useContext } from 'react';
import DebouncedSearch from '../../util/DebouncedSearch/DebouncedSearch';
import DropdownInput from '../../components/inputs/DropdownInput';
import TextInput from '../../components/inputs/TextInput';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { PagePagination } from '../PagePagination/Pagination';
import { getAllBooksAdapter } from '../../adapters/book-adapters';
import AddressSearch from '../AddressSearch/AddressSearch';
import { InputContext } from '../../App';

const SearchPage = () => {
    const [books, setBooks] = useState([]);
    const [direction, setDirection] = useState('az');
    const [attribute, setAttribute] = useState('title');
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState({});
    const [searchRadius, setSearchRadius] = useState(10);
    const [searchAttribute, setSearchAttribute] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [addressSearchLine, setAddressSearchLine] = useState('');
    const inputs = useContext(InputContext);

    //Sort books if sort attributes changed
    useEffect(() => {
        if (books) {
            setBooks(sort(books, direction, attribute));
        }
    }, [direction, attribute])

    //Detect changes in context attributes and chamge state variables only if their values change
    //to avoid data reloading upon every (even unrelated) context change
    const changeDetection = (inputs) => {
        if (direction !== inputs.inputs['searchPageSortOrder']) {
            setDirection(inputs.inputs['searchPageSortOrder']);
        }
        if (attribute !== inputs.inputs['searchPageSortAttribute']) {
            setAttribute(inputs.inputs['searchPageSortAttribute']);
        }
        if (searchRadius !== inputs.inputs['bookAddressSearchRadius']) {
            setSearchRadius(inputs.inputs['bookAddressSearchRadius']);
        }
        if (searchAttribute !== inputs.inputs['searchType']) {
            setSearchAttribute(inputs.inputs['searchType']);
        }
        if (addressSearchLine !== inputs.inputs['bookAddressSearchDebounce']) {
            setAddressSearchLine(inputs.inputs['bookAddressSearchDebounce']);
            if (!inputs.inputs['bookAddressSearchDebounce' || inputs.inputs['bookAddressSearchDebounce'] === '']) {
                setAddress({});
            }
        }
    }

    //Passed to debounce search to detech change in debounce value
    const processDebounce = (e) => {
        if (searchValue !== e.inputs['searchPageDebouncedSearch']) {
            setSearchValue(e.inputs['searchPageDebouncedSearch']);
        } else if (!inputs.inputs['searchPageDebouncedSearch']) {
            setSearchValue(inputs.inputs['searchPageDebouncedSearch']);    
        }
    }

    //Compare values from context with current state to detect changes and avoid unnesessary rendering of components
    useEffect(() => {
        changeDetection(inputs);
    }, [inputs])

    //Main call to backend executed when any of search attributes changes
    //If user provides no values to search for then call is not executed and list of books on the page is cleared
    useEffect(() => {
        if ((!address || !address.address || address.address === '') && (!searchValue || searchValue === '')) {
             //User removed all values by which we can search
            setBooks([]);
            return
        }
        let bookInput = {};
        //User provided some address
        if (address && address.address) {
            bookInput.searchRadius = searchRadius || 10  
            bookInput.latitude = address.latitude;
            bookInput.longitude = address.longitude;  
        }
        //User provided search value
        if (searchValue) {
            // Depending on the value of dropdown it searchs either by title or by author
            if (!searchAttribute || searchAttribute === 'title') {
                bookInput.titles = searchValue;
            }
            if (searchAttribute === 'author') {
                bookInput.authors = searchValue;
            }
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
    }, [searchRadius, address, searchAttribute, searchValue])

    const selectAddress = (a) => {
        setAddress(a)
    }

    const sort = (array, direction, attribute) => {
        if (!attribute || attribute === 'title') {
            return sortByTitle(array, direction);
        } else if (attribute === 'author'){
            return sortByAuthor(array, direction);
        } else {
            return sortByGenre(array, direction);
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

    const sortByGenre = (array, direction) => {
        if (direction === 'za') {
            //descending alphabetical order by "Genre" (Z-to-A)
            array.sort((a, b) => 
                a.genre.toLowerCase() === b.genre.toLowerCase() ? 0 : 
                a.genre.toLowerCase() < b.genre.toLowerCase() ? 1 : -1); 
        } else {
            //ascending alphabetical order by "Genre" (A-to-Z)
            array.sort((a, b) => 
                a.genre.toLowerCase() === b.genre.toLowerCase() ? 0 : 
                a.genre.toLowerCase() < b.genre.toLowerCase() ? -1 : 1); 
        } 
        return array;
    };

    return (
        <div className='search-page'>
            <div className='inputs-container'>
                <div className='search-inputs'>
                    <DropdownInput 
                        label={''}
                        id={'searchType'}
                        options={[{value: 'title', label: 'Search by title'}, {value: 'author', label: 'Search by author'}]}
                        defaultValue={'title'} showPlaceholder={false}
                    />
                    <DebouncedSearch 
                        id={'searchPageDebouncedSearch'}
                        handleDebounce={processDebounce}
                    />
                </div>
                <div className='sort-inputs'>
                    <DropdownInput id={'searchPageSortOrder'} defaultValue={'A to Z'} label={''}
                        options={[{value: "az", label: "Sort A to Z"}, {value: "za", label: "Sort Z to A"}]} />
                    <DropdownInput id={'searchPageSortAttribute'} defaultValue={'Title'} label={''}
                        options={[{value: "title", label: "Sort By Title"}, {value: "author", label: "Sort By Author"}, {value: "genre", label: "Sort By Genre"}]} />
                </div>
                <AddressSearch id={'bookAddressSearch'} onAddressSelected={selectAddress}/>
                <TextInput 
                    label={'Search radius (miles)'}
                    placeholder={'10'}
                    type='text'
                    id={'bookAddressSearchRadius'}
                    name={'bookAddressSearchRadius'}
                />
            </div>
            {loading ? <LoadingSpinner /> : null}
            <PagePagination books={sort(books,  direction, attribute)} />              
        </div>
    );
};

export default SearchPage; 