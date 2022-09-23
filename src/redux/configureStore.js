import { legacy_createStore as createStore, combineReducers } from 'redux';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({ Books: bookReducer, Categories: categoriesReducer });

const store = createStore(rootReducer);

export default store;
