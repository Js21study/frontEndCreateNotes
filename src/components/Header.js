import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
<header className="d-flex flex-wrap justify-content-center py-3 mb-5 px-5 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src="../icon.png" alt="logo" />
        <span className="fs-4 text-dark">Note</span>
      </a>

      <ul className='nav nav-pills'>
            <li className='nav-item home'><NavLink  exact="true" className="nav-link home" to="/" >Home</NavLink></li>

            <li className='nav-item'><NavLink className="nav-link" to="/note/" >Note</NavLink></li>

            <li className='nav-item'><NavLink className="nav-link" to="/create" >Create</NavLink></li>

            <li className='nav-item'><NavLink className="nav-link" to="/about" >About</NavLink></li>
        </ul>
    </header>      
    </div>
  )
}

export default Header;