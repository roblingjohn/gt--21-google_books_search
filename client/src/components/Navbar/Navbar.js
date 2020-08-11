import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Google Books Search</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/saved">Saved</Link></li>
      </ul>
    </div>
  </nav>
    </div>
  );
};

export default Navbar;
