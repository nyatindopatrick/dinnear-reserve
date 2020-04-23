import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="ml-md-5 ml-lg-5 ml-0 my-lg-auto my-md-auto my-1" to="/">
        <img
          src="https://user-images.githubusercontent.com/48393059/80004660-450e1600-84cb-11ea-9f6f-a5b1483d6fce.png"
          alt=""
        />
      </Link>

      <ul className="my-lg-auto my-md-auto my-1">
        <li>
          <Link to="/search">
            <i className="fas fa-search"></i> <span>Search</span>
          </Link>
        </li>
        <li>
          <Link to="/detail">
            <i className="fas fa-utensils"></i> <span>Explore</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-wifi"></i> <span>Insights</span>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <i className="fas fa-bars"></i> <span>More</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
