import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="logo">
          Sk8erWise
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/parks">Parks</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/parks" onClick={() => setOpen(false)}>Parks</Link>
        <Link to="/favorites" onClick={() => setOpen(false)}>Favorites</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
      </div>
    </nav>
  );
}
