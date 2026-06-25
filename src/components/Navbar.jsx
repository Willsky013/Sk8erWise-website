import { useState } from "react";
import { Link } from "react-router-dom";
import ParkSearch from './ParkSearch.jsx'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Sk8erWise</Link>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/parks" onClick={() => setIsOpen(false)}>
            Parks
          </Link>
        </li>
        <li>
          <Link to="/favorites" onClick={() => setIsOpen(false)}>
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
      </ul>
      <ParkSearch className="nav-search" placeholder="Search parks..." />      
    </nav>
    
  );
}

export default Navbar;
