import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>
        Google Books || <Link to="/search">Search</Link> |{" "}
        <Link to="/saved">Saved</Link>
      </h1>
    </div>
  );
};

export default Navbar;
