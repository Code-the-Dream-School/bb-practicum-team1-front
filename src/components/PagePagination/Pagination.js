import React, {useState} from "react";
import ReactPaginate from 'react-paginate'
import './Pagination.scss'

export const PagePagination = ({books = []}) => {
    const [pageNumber, setPageNumber] = useState(0);

    const booksPerPage = 10;
    const pagesVisited = pageNumber * booksPerPage;

    const displayBooks = books
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((book) => {
        return(
            <li className="book" key={book.id}>
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.description}</div>
                <div>{book.genre}</div>
            </li>
        )
    });

    const pageCount = Math.ceil(books.length / booksPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return(
        <div className="Pagination">
            {displayBooks}
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