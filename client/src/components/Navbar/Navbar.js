import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper" id="navbar">
          <Link to="/" id="navbarLogo">Google Books Search</Link>
          <ul id="nav-mobile" class="right">
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
