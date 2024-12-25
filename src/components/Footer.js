import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../assets/css/style.css";

const Footer = () => {
  useEffect(() => {
    // Adding the visible class for animation when the component is loaded
    const footer = document.querySelector("footer");
    footer.classList.add("visible");

    const footerText = document.querySelector(".text-center");
    footerText.classList.add("visible");

    const navLinks = document.querySelectorAll(".navbar1 a");
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = 1;
        link.style.transform = "translateX(0)";
      }, 200 * index); // Delay for each link's animation
    });

    const socialIcons = document.querySelectorAll(".fab");
    socialIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.opacity = 1;
        icon.style.transform = "scale(1)";
      }, 200 * index); // Delay for each icon's animation
    });
  }, []);

  const handleNavigation = (path) => {
    NProgress.start(); // Start the loading bar
    setTimeout(() => {
      NProgress.done(); // Complete the loading bar
    }, 500); // Simulated delay
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Footer Brand and About Section */}
          <div className="col-md-4 mb-4">
            <h3 className="text-uppercase mb-3">
              <Link
                to="/"
                className="text-white text-decoration-none footer-logo"
              >
                DigiCart
              </Link>
            </h3>
            <p>
              DigiCart makes shopping effortless with high-quality products,
              exclusive deals, and convenient delivery, bringing value, style,
              and satisfaction right to your doorstep.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-2 mb-4">
            <h5 className="text-uppercase">Navigation</h5>
            <nav className="navbar1">
              <ul>
                <li>
                  <Link
                    to="/"
                    className="nav-link font-weight-bold text-white"
                    onClick={() => handleNavigation("/")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="nav-link font-weight-bold text-white"
                    onClick={() => handleNavigation("/shop")}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="nav-link font-weight-bold text-white"
                    onClick={() => handleNavigation("/cart")}
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="nav-link font-weight-bold text-white"
                    onClick={() => handleNavigation("/contact")}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <address>
              <p>
                <a
                  href="tel:042-81854-6041"
                  className="text-white text-decoration-none"
                >
                  042-81854-6041
                </a>
              </p>
              <p>
                <a
                  href="mailto:charity90@gmail.com"
                  className="text-white text-decoration-none"
                >
                  charity90@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Social Media Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i
                  className="fab fa-whatsapp fa-2x"
                  style={{ color: "#25D366" }}
                ></i>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i
                  className="fab fa-facebook fa-2x"
                  style={{ color: "#1877F2" }}
                ></i>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i
                  className="fab fa-instagram fa-2x"
                  style={{ color: "#C13584" }}
                ></i>
              </a>
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-tiktok fa-2x"
                  style={{ color: "#000000" }}
                ></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">
            Copyright &copy; 2023 All rights reserved | This template is made
            with ❤️ by{" "}
            <a
              href="https://h6o9.github.io/My-Portfolio/Aboutme/"
              className="text-white text-decoration-none"
            >
              Shahzaib Afzaal Muhammadi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
