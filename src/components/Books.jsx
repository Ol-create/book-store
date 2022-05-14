import React from 'react';
import BookElement from './SingleBook';
import AddBook from './AddBook';

const Books = () => (
  <div>
    <ul className="bookList">
      <BookElement title="Book Title" author="Author Name" />
    </ul>
    <AddBook />
  </div>
);

export default Books;
