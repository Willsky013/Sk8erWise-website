import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" onClick={() => setIsOpen(false)}>Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        </li>
      </ul>

      {/* SEARCH BAR */}
      <ParkSearch className="nav-search" placeholder="Search parks..." />
    </nav>
  );
}

export default Navbar;
