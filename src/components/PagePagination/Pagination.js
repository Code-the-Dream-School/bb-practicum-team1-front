import React, {useState} from "react";
import ReactPaginate from 'react-paginate'
import BookItem from "../BookItem/BookItem";
import './Pagination.scss'
import BookList from "../BookList/BookList";

export const PagePagination = ({books = [], booksPerPage = 10}) => {
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * booksPerPage;
    const displayBooks = books
    .slice(pagesVisited, pagesVisited + booksPerPage);

    const pageCount = Math.ceil(books.length / booksPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return(
        <div className="Pagination">
            <BookList bookList={displayBooks}/>
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