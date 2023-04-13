import { useMemo, useState } from "react"
import BookItem from "../BookItem/BookItem"
import { Pagination } from "../PagePagination/Pagination";

let PageSize = 10;

const BookList = ({ bookList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const bookListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return bookList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

    return (
        <section>
            {bookListData.map((item) => (
                <BookItem key={item.id} item={item} />
            ))}
            <Pagination
            className= "pagination-bar"
            currentPage= {currentPage}
            totalCount= {bookList.length}
            pageSize= {PageSize}
            onPageChange= {page => setCurrentPage(page)}
      />
        </section>
    )
}
export default BookList