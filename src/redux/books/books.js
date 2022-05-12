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
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
	case ADDBOOK:
    return [...state, action.book];
	case REMOVEBOOK:
    return state.filter((book, index) => index !== action.book);
	default:
    return state;
  }
};

export default reducer;
