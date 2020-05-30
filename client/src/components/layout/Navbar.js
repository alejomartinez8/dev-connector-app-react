import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <a href='!#'>Desarrolladores</a>
        </li>
        <li>
          <Link to='/register'>Registro</Link>
        </li>
        <li>
          <Link to='/login'>Ingreso</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
