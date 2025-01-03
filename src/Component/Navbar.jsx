import React, { useState } from "react";
import { Link } from "react-router-dom";  // Make sure to use Link from react-router-dom
import logoLight from "../assets/images/logo-light.png";
import '../assets/css/solinom.css';
import '../assets/css/solinom-custom-rtl.css';
import '../assets/css/solinom-rtl.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MobileNav from './navbarScroll';  // Correctly import MobileNav Component

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);  // State to manage mobile nav visibility

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);  // Toggle mobile navigation
  };

  return (
    <header className="main-header main-header--two sticky-header fixed-top sticky-header--normal">
      <div className="container">
        <div className="main-header__inner">
          <div className="main-header__logo">
            <Link to="/">
              <img
                src={logoLight}
                alt="Solinom HTML"
                width="110"
                height="90"
              />
            </Link>
          </div>
          <div className="main-header__middle">
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="dropdown">
                  <Link to="/room-2.html">Room</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/room">Deluxe</Link>
                    </li>
                    <li>
                      <Link to="/">Standard</Link>
                    </li>
                    <li>
                      <Link to="/detail">Room Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/gallery-grid.html">Gallery</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="404.html">404 Error</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>

            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main-header__right">
            <Link to="/room-2.html" className="solinom-btn main-header__btn">
              Book Room
            </Link>

            <div className="main-header__info">
              <Link to="cart" className="main-header__info__item">
                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                <span className="sr-only">Cart</span>
              </Link>
              <a href="#" className="search-toggler main-header__info__item">
                <i className="fas fa-search" aria-hidden="true"></i>
                <span className="sr-only">Search</span>
              </a>
            </div>
            {/* Mobile Nav Toggle Button */}
            <div
              className="mobile-nav__btn mobile-nav__toggler"
              onClick={toggleMobileNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {/* Render MobileNav Component */}
      {isMobileNavOpen && <MobileNav />}
    </header>
  );
}

export default Navbar;
