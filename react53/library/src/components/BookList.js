import Book from './Book'
import '../css/BookList.css'

const BookList = ({books})=>{
    return (
        <div className='book-list'>
            {books.map((book)=>
            <Book 
            key={book.id}
            src = {book.src}
            title = {book.title}
            author = {book.author}
            description = {book.description}
            /> )}
        </div>
    )
}

export default BookList