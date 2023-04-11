import React, { useMemo, useState } from 'react';
import './_BookItem.scss';
import { Pagination } from '../PagePagination/Pagination';

let PageSize = 10;

const BookItem = ({ item }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const bookList = useMemo(() => {
        const items = Array.isArray(item) ? item : [item];
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return items.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, item])

    return (
        <li className='book-item'>
        {bookList.map(item => (
            <React.Fragment key={item.id}>
            <div>{item.title}</div>
            <div>{item.language}</div>
            <div>{item.ageRange}</div>
            <div>{item.publishingYear}</div>
            <div>{item.status}</div>
            <div> {item.image}</div>
            <div>{item.description}</div>
            <div>{item.genre}</div>
            </React.Fragment>
        ))}
            <Pagination
            class="pagination-bar"
            current={currentPage}
            totalCount={Array.isArray(item) ? item.length : 1}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
            />
        </li>
    );
};

export default BookItem;