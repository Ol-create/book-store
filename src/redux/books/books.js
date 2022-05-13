import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const initialState = [
  { id: '001', title: 'Python Lang', author: 'Rony' },
  { id: '002', title: 'Believe in me', author: 'Dr. Mark' },
];

export const addBook = (title, author) => ({
  type: ADDBOOK,
  book: { id: uuidv4(), title, author },
});

export const removeBook = (id) => ({
  type: REMOVEBOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
