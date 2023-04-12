import BookItem from '../BookItem/BookItem'

const BookList = ({ bookList }) => {
    return (
        <section>
            {bookList.map((item) => (
                <BookItem key={item.id} item={item} />
            ))}
        </section>
    )
}

export default BookList
