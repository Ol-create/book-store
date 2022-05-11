const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const initialState = [];

export const addBook = (title) => ({
	type: ADDBOOK,
	book: { title },
  });

  export const removeBook = (id) => ({
	type: REMOVEBOOK,
	book: id,
  })
