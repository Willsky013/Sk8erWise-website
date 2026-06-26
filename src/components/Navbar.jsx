import { useState } from "react";
import { Link } from "react-router-dom";
import ParkSearch from "./ParkSearch.jsx";
import "./components-css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar_logo">
        <Link to="/">Sk8erWise</Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="navbar_toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* NAV LINKS */}
      <ul className={`navbar_links ${isOpen ? "navbar_links--open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/favorites" onClick={() => setIsOpen(false)}>Favorites</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
      </ul>

      {/* SEARCH BAR */}
      <ParkSearch className="nav-search" placeholder="Search parks..." />
    </nav>
  );
}

export default Navbar;
