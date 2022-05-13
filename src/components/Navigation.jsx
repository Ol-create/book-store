import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => (
  <header>
    <div className="headBar">
      <h1>Bookstore CMS</h1>
      <ul className="navBar">
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </ul>
      <div className="logIn"><FontAwesomeIcon icon={faUser} size="xl" className="user" /></div>
    </div>
  </header>
);

export default Navigation;
