import React from 'react';
import { useSelector } from 'react-redux';
import BookElement from './SingleBook';
import AddBook from './AddBook';

const Books = () => {
  const bookList = useSelector((store) => store.books);
  console.log(bookList);
  return (
    <div>
      <ul className="bookList">
        {bookList.map((book) => (
          <BookElement key={book.id} title={book.title} author={book.author} id={book.id} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
