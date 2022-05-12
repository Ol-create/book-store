import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const checkHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" className="checkBtn" onClick={checkHandler}>Check Status</button>
    </div>
  );
};

export default Categories;
