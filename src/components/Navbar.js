import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;
