import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NProgress from "nprogress"; // Import NProgress
import "nprogress/nprogress.css"; // Import NProgress styles
import "../assets/css/style.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    NProgress.start(); // Start the loading bar
    navigate(`/shop?category=${category}`);
    NProgress.done(); // Complete the loading bar
  };

  const handleNavigation = (path) => {
    NProgress.start(); // Start the loading bar
    navigate(path);
    NProgress.done(); // Complete the loading bar
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="main-logo" href="/">
          DigiCart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navigation">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link font-weight-bold"
                onClick={() => handleNavigation("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link font-weight-bold"
                onClick={() => handleNavigation("/shop")}
              >
                Shop
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle font-weight-bold"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu font-weight-bold">
                <li>
                  <a
                    href="#"
                    onClick={() => handleCategorySelect("Men")}
                    className="dropdown-item"
                  >
                    Men
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleCategorySelect("Women")}
                    className="dropdown-item"
                  >
                    Women
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleCategorySelect("Kids")}
                    className="dropdown-item"
                  >
                    Kids
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/cart"
                className="nav-link font-weight-bold "
                onClick={() => handleNavigation("/cart")}
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link font-weight-bold"
                onClick={() => handleNavigation("/contact")}
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
