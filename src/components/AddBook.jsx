import React from 'react';

const AddBook = () => (
  <form className="addBook">
    <h2>ADD NEW BOOK</h2>
    <input type="text" name="title" placeholder="Book Title" />
    <input type="text" name="author" placeholder="Book Author" />
    <button className="addBtn" type="submit">Add Books</button>
  </form>
);

export default AddBook;
