
import { v4 as uuidv4 } from 'uuid';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GGI7t3uPhMwUj8R3YHDl/books';
const FETCHBOOKS = 'bookstore/books/FETCHBOOKS';
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const initialState = [];

// export const addBook = (title) => ({
//   type: ADDBOOK,
//   book: { title },
// });

// export const removeBook = (id) => ({
//   type: REMOVEBOOK,
//   book: id,
// });

const apiAddBook = async (id, title, author) => {
  const add = await fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category: 'unsorted',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  (await add.text());
};

const apiRemoveBook = async (id) => {
  const remove = await fetch(`${api}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  (await remove.text());
};

//
const apiFetchBooks = async () => {
  const response = await fetch(api, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const booksList = await response.json();
  const newState = Object.keys(booksList).map((id) => ({
    id,
    title: booksList[id][0].title,
    author: booksList[id][0].author,
  }));

  return newState;
};

export const fetchBooks = () => (async (dispatch) => {
  const books = await apiFetchBooks();
  dispatch({
    type: FETCHBOOKS,
    newState: books,
  });
});
//

export const addBook = (title, author) => (async (dispatch) => {
  const id = uuidv4();
  await apiAddBook(id, title, author);
  dispatch({
    type: ADDBOOK,
    book: { id, title, author },
  });
});

export const removeBook = (id) => (async (dispatch) => {
  await apiRemoveBook(id);
  dispatch({
    type: REMOVEBOOK,
    id,
  });
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];
    case REMOVEBOOK:
      return state.filter((book, index) => index !== action.book);
    case FETCHBOOKS:
      return action.newState;
    default:
      return state;
  }
};

export default reducer;
