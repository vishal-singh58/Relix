import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="navbar">
      <h1 className="logo">Relix</h1>

      <ul className="navlinks">
        <li>
          <Link to="/" className={isActive("/") ? "active-link" : ""}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/catalogue" className={isActive("/catalogue") ? "active-link" : ""}>
            Catalogue
          </Link>
        </li>

        <li>
          <Link to="/blog" className={isActive("/blog") ? "active-link" : ""}>
            Blog
          </Link>
        </li>

        <li>
          <Link to="/about" className={isActive("/about") ? "active-link" : ""}>
            About
          </Link>
        </li>

        <li>
          <Link to="/services" className={isActive("/services") ? "active-link" : ""}>
            Services
          </Link>
        </li>

        <li>
          <Link to="/faq" className={isActive("/faq") ? "active-link" : ""}>
            FAQ
          </Link>
        </li>
      </ul>

      <button className="contact-button">
        <Link
  to="/contact"
  className={isActive("/contact") ? "contact-active" : ""}
>
  Contact Us
</Link>

      </button>
    </div>
  );
};

export default Navbar;
