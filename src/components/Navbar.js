/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCloudMoonRain, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {  Link } from "react-router-dom";
import { useSelector } from 'react-redux';


export const FunctionalNavbar = () => {

  const calc = useSelector(state => state.increament.currentCounter);
  const carts = useSelector(state => state.carts.currentGoots);

  return (
    <nav className="navbar navbar-light bg-info">
      <div className="container-fluid w-75">
        <a className="navbar-brand text-light" href="#">
          Navbar
        </a>
        <Link to="/" className="nav-link active text-light" >one</Link>
        <Link to="/two" className="nav-link text-light">two</Link>
        <Link to="/three" className="nav-link text-light">three</Link>
        <Link to="/card" className="nav-link text-light">card</Link>
        <a className="nav-link disabled">Disabled</a>
        <h1>{calc}</h1>
        <h1>carts({carts})</h1>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faBook} />
        <FontAwesomeIcon icon={faCloudMoonRain} />
      </div>
    </nav>
  );
};
