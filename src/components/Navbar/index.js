import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_menu container">
        <Link to="/" className="navbar_link">Home</Link>
        <Link to="/trending" className="navbar_link">Trending</Link>
      </div>
    </nav>
  )
}

export default Navbar;