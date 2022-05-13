import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const BookElement = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <li className="bookElement">
      <div>
      <p className="category">Unsorted</p>
        <h3>{title}</h3>
        <small>{author}</small>
        <ul className="bookEdit">
          <li>Comments</li>
          <li><button id={id} type="button" onClick={removeHandler}>Remove</button></li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="progress">
      <div><FontAwesomeIcon icon={faCircle} size="4x" className="load" /></div>
        <div>
        <p>0%</p>
          <small>Completed</small>
        </div>
      </div>
      <div className="bookInfo">
        <small>CURRENT CHAPTER</small>
        <p>Chapter 1</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BookElement.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookElement;
