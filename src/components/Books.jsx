/* eslint linebreak-style: ["error", "windows"] */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookElement from './SingleBook';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((store) => store.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
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
