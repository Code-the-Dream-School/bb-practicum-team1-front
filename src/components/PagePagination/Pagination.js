import React, {useState} from "react";
import ReactPaginate from 'react-paginate'
import BookItem from "../BookItem/BookItem";
import './Pagination.scss'

export const PagePagination = ({books = []}) => {
    const [pageNumber, setPageNumber] = useState(0);

    const booksPerPage = 10;
    const pagesVisited = pageNumber * booksPerPage;

    const displayBooks = books
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((book, index) => {
        return(
            <li className="book" key={index}>
                <BookItem item={book}/>
            </li>
        )
    });

    const pageCount = Math.ceil(books.length / booksPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return(
        <div className="Pagination">
            <ul>
            {displayBooks}
            </ul>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttns"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
        </div>
    )
    
}