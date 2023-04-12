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
        <>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Language</th>
                <th>Age Range</th>
                <th>Publish Year</th>
                <th>Status</th>
                <th>Image</th>
                <th>Description</th>
                <th>Genre</th>
            </tr>
            </thead>
            <tbody>
            {bookList.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.language}</td>
                        <td>{item.ageRange}</td>
                        <td>{item.publishingYear}</td>
                        <td>{item.status}</td>
                        <td>{item.image}</td>
                        <td>{item.description}</td>
                        <td>{item.genre}</td>
                        <td>{item.title}</td>
                    </tr>
                )
            }
            )}
        </tbody>
        </table>
            <Pagination
            class="pagination-bar"
            current={currentPage}
            totalCount={Array.isArray(item) ? item.length : 1}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
};

export default BookItem;