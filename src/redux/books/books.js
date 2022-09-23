import { v4 as uuidv4 } from 'uuid';

// Define action constant
const ADD_NEW_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defualtBooks = [
  {
    id: uuidv4(),
    title: 'A Place Called Home',
    author: 'Preeti Shenoy',
  },
  {
    id: uuidv4(),
    title: 'Leaders, Politicians, Citizens',
    author: 'Rasheed Kidwai ',
  },
  {
    id: uuidv4(),
    title: 'The Maverick Effect',
    author: 'Harish Mehta',
  },
];

export const createBook = (newBook) => ({
  type: ADD_NEW_BOOK,
  payload: newBook,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

const bookReducer = (initialState = defualtBooks, action) => {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.id !== action.payload))];
    default:
      return initialState;
  }
};

export default bookReducer;
