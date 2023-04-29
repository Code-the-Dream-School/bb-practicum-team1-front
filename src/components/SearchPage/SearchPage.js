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
    const [address, setAddress] = useState({})
    const [searchRadius, setSearchRadius] = useState(10)
    const [searchAttribute, setSearchAttribute] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [addressSearchLine, setAddressSearchLine] = useState('')
    const inputs = useContext(InputContext)

    //Sort books if sort attributes changed
    useEffect(() => {
        if (books) {
            setBooks(sort(books, direction, attribute))
        }
    }, [direction, attribute])

    //Detect changes in context attributes and chamge state variables only if their values change
    //to avoid data reloading upon every (even unrelated) context change
    const changeDetection = (inputs) => {
        if (direction !== inputs.inputs['searchPageSortOrder']) {
            console.log('Direction changed')
            setDirection(inputs.inputs['searchPageSortOrder'])
        }
        if (attribute !== inputs.inputs['searchPageSortAttribute']) {
            console.log('Sort attribute changed')
            setAttribute(inputs.inputs['searchPageSortAttribute'])
        }
        if (searchRadius !== inputs.inputs['bookAddressSearchRadius']) {
            console.log('Search radius changed')
            setSearchRadius(inputs.inputs['bookAddressSearchRadius'])
        }
        if (searchAttribute !== inputs.inputs['searchType']) {
            console.log('Search attribute changed')
            setSearchAttribute(inputs.inputs['searchType'])
        }
        if (addressSearchLine !== inputs.inputs['bookAddressSearchDebounce']) {
            console.log('Address search line changed')
            setAddressSearchLine(inputs.inputs['bookAddressSearchDebounce'])
            if (!inputs.inputs['bookAddressSearchDebounce' || inputs.inputs['bookAddressSearchDebounce'] === '']) {
                setAddress({})
            }
        }
    }

    const processDebounce = (e) => {
        changeDetection(e)
        console.log(e)
        if (searchValue !== e.inputs['searchPageDebouncedSearch']) {
            console.log('Search value attribute changed')
            setSearchValue(e.inputs['searchPageDebouncedSearch'])
        }
    }

    useEffect(() => {
        changeDetection(inputs)
    }, [inputs])

    useEffect(() => {
        if ((!address || !address.address || address.address === '') && (!searchValue || searchValue === '')) {
            console.log('Nothing to search')
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
        if (searchValue) {
            // Depending on the value of dropdown it searchs either by title or by author
            if (!searchAttribute || searchAttribute === 'title') {
                bookInput.title = searchValue;
            }
            if (searchAttribute === 'author') {
                bookInput.author = searchValue;
            }
        }

        setLoading(true)
        getAllBooksAdapter(bookInput)
            .then(data => {
                if (data) {

                    setBooks(data.books);
                } else {
                    console.log('No books')
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
            //descending alphabetical order by "Author" (Z-to-A)
            array.sort((a, b) => 
                a.genre.toLowerCase() === b.genre.toLowerCase() ? 0 : 
                a.genre.toLowerCase() < b.genre.toLowerCase() ? 1 : -1); 
        } else {
            //ascending alphabetical order by "Author" (A-to-Z)
            array.sort((a, b) => 
                a.genre.toLowerCase() === b.genre.toLowerCase() ? 0 : 
                a.genre.toLowerCase() < b.genre.toLowerCase() ? -1 : 1); 
        } 
        return array;
    };

    return (
        <>
            <DebouncedSearch 
                id={'searchPageDebouncedSearch'}
                handleDebounce={processDebounce}
            />
            <div style={{ display: "flex" }}>
                <DropdownInput 
                    label={''}
                    id={'searchType'}
                    options={[{value: 'title', label: 'Search by title'}, {value: 'author', label: 'Search by author'}]}
                    defaultValue={'title'} showPlaceholder={false}
                />
                <DropdownInput id={'searchPageSortOrder'} defaultValue={'A to Z'} label={''}
                    options={[{value: "az", label: "Sort A to Z"}, {value: "za", label: "Sort Z to A"}]} />
                <DropdownInput id={'searchPageSortAttribute'} defaultValue={'Title'} label={''}
                    options={[{value: "title", label: "Sort By Title"}, {value: "author", label: "Sort By Author"}, {value: "genre", label: "Sort By Genre"}]} />
            </div>
            <div>
                <AddressSearch id={'bookAddressSearch'} onAddressSelected={selectAddress}/>
                <TextInput 
                    label={'Search radius'}
                    placeholder={'10 miles'}
                    type='text'
                    id={'bookAddressSearchRadius'}
                    name={'bookAddressSearchRadius'}
                />
            </div>
            {loading ? <LoadingSpinner /> : null}
            <PagePagination books={sort(books,  direction, attribute)} />              
        </>
    );
};

export default SearchPage; 