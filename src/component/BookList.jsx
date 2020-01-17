import React from "react"
import BookCard from "./BookCard"
import "./BookList.scss" 

const BookList = (props) => {
    // なぜ、destructuingするとprops is not defined ってなるんや？？
    const { books } = props;
    return (
        <div className="book_list_container">
            <div className="book_list">
                {books.map((book,id) => {
                    return <BookCard 
                        key={id}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate}
                        description={book.volumeInfo.description}
                    />
                })}
            </div>
        </div>
    )
}

export default BookList;