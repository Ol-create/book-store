/*  eslint linebreak-style: ["error", "windows"]   */

import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!e.target.elements[1].value) {
      dispatch(addBook(e.target.elements[0].value, 'Anonymous'));
    } else {
      dispatch(addBook(e.target.elements[0].value, e.target.elements[1].value));
    }
  };

  return (
    <form className="addBook" onSubmit={submitHandler}>
      <h2>ADD NEW BOOK</h2>
      <div className="inputs">
        <input type="text" name="title" placeholder="Book Title" required />
        <input type="text" name="author" placeholder="Book Author" />
        <button className="addBtn" type="submit">Add Books</button>
      </div>
    </form>
  );
};

export default AddBook;
