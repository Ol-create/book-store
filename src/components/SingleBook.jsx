import React from 'react';
import PropTypes from 'prop-types';

const BookElement = (props) => {
  const { title, author } = props;
  return (
    <li className="bookElement">
      <div>
        <h3>{title}</h3>
        <small>{author}</small>
        <ul className="bookEdit">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="progress">
        <div>O</div>
        <div>
          <p>70%</p>
          <small>Completed</small>
        </div>
      </div>
      <div className="bookInfo">
        <small>CURRENT CHAPTER</small>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BookElement.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookElement;
